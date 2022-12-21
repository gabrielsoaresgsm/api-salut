import connect from "../../utils/database"

export default async function handler(req, res){

    const {db} = await connect() // Pegando database


    const user = {
        id: req.body.id,
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    }
    const response = await db.collection('users').insertOne(user)


    res.status(200).json(response)
}