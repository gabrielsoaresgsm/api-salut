import connect from "../../utils/database"

export default async function handler(req, res){
    const {db} = await connect() // Pegando database

    const user = {
        name: req.body.name
    }
    // var id = require('mongodb').ObjectId;
    // const response = await db.collection('users').findOne({_id:id("63a25a319731e7c3871edddc")})

    const response = await db.collection('users').findOne(user)
    

    res.status(200).json(response)
}