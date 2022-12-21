import login from "../../utils/userDAO";

export default async function handler(req, res){
    // res.status(200).json(req.body)

    const user = {
        email: req.body.email,
        password: req.body.password
    }

    const response = await login(user.email, user.password)

    if (response === null){
        return res.status(200).json({message: 'Login ou senha incorreta'})
    }

    res.status(200).json(response)
}