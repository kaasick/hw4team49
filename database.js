// database.js
const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "Edvard11", //add your password
    database: "testWad",
    host: "localhost",
    port: "5432"
});

pool.connect();

pool.query(`Select * from users`, (err, res) => {
    if (!err){
        console.log(res.rows);
    }else {
        console.log(err.message);
    }
    pool.end;
})

module.exports = pool;