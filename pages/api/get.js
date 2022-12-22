import {get} from "../../utils/userDAO";

export default async function handler(req, res){

    const user = {
        email: req.body.email,
    }

    const response = await get(user.email)

    if (response === null){
        return res.status(200).json({message: 'E-mail não existe'})
    }

    res.status(200).json(response)
}