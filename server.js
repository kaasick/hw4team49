// server.js
const express = require('express');
const pool = require('./database');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const userRouter = require('./routes/user_routes')

const port = process.env.PORT || 3000;

const app = express();
// app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello postgrEEess321w')
})
// app.use(cors({ origin: 'http://localhost:8080', credentials: true }));

app.use('/api', userRouter)


// We need to include "credentials: true" to allow cookies to be represented  
// Also "credentials: 'include'" need to be added in Fetch API in the Vue.js App

app.use(express.json());  // Parses incoming requests with JSON payloads and is based on body-parser.
app.use(cookieParser());  // Parse Cookie header and populate req.cookies with an object keyed by the cookie names.


    // Code will go here  
    const generateJWT = (id) => {
        return jwt.sign({ id }, secret, { expiresIn: maxAge })
            //jwt.sign(payload, secret, [options, callback]), and it returns the JWT as string
    }


app.listen(port, () => {
    console.log("Server is listening to port " + port)
});