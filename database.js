// database.js
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "kool123",
    database: "testWad",
    host: "localhost",
    port: "5432"
});

module.exports = pool;