import {getUser} from "../../utils/userDAO";

export default async function handler(req, res){

    const user = {
        id: req.body.id,
    }

    const response = await getUser(user.id)

    if (response === null){
        return res.status(400).json({message: 'ID não existe'})
    }

    res.status(200).json(response)
}