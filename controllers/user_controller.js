const db = require('../database')


class UserController {
    async createUser(req, res){
        const {email} = req.body
        console.log(email)
        // const newPerson = await db.query('INSERT INTO person (name) values ($1) RETURNING *', [email])
        res.json('ok')
    }

    async getUsers(req, res){
        
    }

    async getOneUser(req, res){
        
    }



}

module.exports = new UserController()