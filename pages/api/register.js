import {register} from "../../utils/userDAO";

export default async function handler(req, res){

    const userRegister = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
    }

    if ( req === null){
        return res.status(400).json({message: "valor nulo"});
    } else {
      const response = await register(userRegister.email, userRegister.password, userRegister.name)
      if (response === null){
            return res.status(200).json({message: 'NULL'})
      }

      res.status(200).json(response)
    }
}