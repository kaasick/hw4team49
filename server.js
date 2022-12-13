// server.js
const express = require('express');
const pool = require('./database');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
// We need to include "credentials: true" to allow cookies to be represented  
// Also "credentials: 'include'" need to be added in Fetch API in the Vue.js App

app.use(express.json());  // Parses incoming requests with JSON payloads and is based on body-parser.
app.use(cookieParser());  // Parse Cookie header and populate req.cookies with an object keyed by the cookie names.


    // Code will go here  
const secret = "dlsadpdsapdkkqfnvreodsadops832190321";
const maxAge = 60 * 60;
//generate jwt with name generateJWT
const generateJWT = (id) => {
    return jwt.sign({ id }, secret, { expiresIn: maxAge });
}

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});
app.get('/auth/authenticate', async(req, res) => {
    console.log('authentication request has been arrived');
    const token = req.cookies.jwt; // assign the token named jwt to the token const
    //console.log("token " + token);
    let authenticated = false; // a user is not authenticated until proven the opposite
    try {
        if (token) { //checks if the token exists
            //jwt.verify(token, secretOrPublicKey, [options, callback]) verify a token
            await jwt.verify(token, secret, (err) => { //token exists, now we try to verify it
                if (err) { // not verified, redirect to login page
                    console.log(err.message);
                    console.log('token is not verified');
                    res.send({ "authenticated": authenticated }); // authenticated = false
                } else { // token exists and it is verified
                    console.log('author is authinticated');
                    authenticated = true;
                    res.send({ "authenticated": authenticated }); // authenticated = true
                }
            })
        } else { //applies when the token does not exist
            console.log('author is not authinticated');
            res.send({ "authenticated": authenticated }); // authenticated = false
        }
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});

//signup a user
app.post('/auth/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        //hash password
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        //insert into
        const result = await pool.query( // insert the user and the hashed password into the database
            "INSERT INTO users(email, password) values ($1, $2) RETURNING*", [email, hashedPassword]
        );
        //generate jwt
        const token = generateJWT(result.rows[0].id);
        //send jwt in a cookie

        res.status(201).cookie('jwt',token, {maxAge:6000000,httpOnly:true}).json({ user_id: result.rows[0].id }).send;
    }catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }

});
app.post('/auth/login', async(req, res) => {
    try {
        console.log("a login request has arrived");
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) return res.status(401).json({ error: "User is not registered" });

        /*
        To authenticate users, you will need to compare the password they provide with the one in the database.
        bcrypt.compare() accepts the plain text password and the hash that you stored, along with a callback function.
        That callback supplies an object containing any errors that occurred, and the overall result from the comparison.
        If the password matches the hash, the result is true.
        bcrypt.compare method takes the first argument as a plain text and the second argument as a hash password.
        If both are equal then it returns true else returns false.
        */

        //Checking if the password is correct
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        //console.log("validPassword:" + validPassword);
        if (!validPassword) return res.status(401).json({ error: "Incorrect password" });

        const token = await generateJWT(user.rows[0].id);
        res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: user.rows[0].id })
            .send;
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});
app.get('/auth/logout', async (req, res) => {
    console.log('delete jwt request arrived');
    res.status(202).clearCookie('jwt').json({ "Msg": "cookie cleared" }).send
});
app.get('/auth/posts', (req, res) => {
    //get all posts from database table posts
    //poolik
});

app.post('/auth/post', async (req, res) => {
    //get the body of post and Timestamp and insert into database table posts
    try {
        const {body} = req.body;
        const result = await pool.query( // insert the user and the hashed password into the database
            "INSERT INTO posts(body, posttime) values ($1, TO_CHAR(NOW()::DATE, 'dd/mm/yyyy')) RETURNING *", [body]
        );
        //generate jwt
        res.json(result);
        //send jwt in a cookie
    }catch (err){
        console.log(err.message);
        res.status(400).send(err.message);
    }

});