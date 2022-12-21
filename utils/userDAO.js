// Realizar operações de CRUD da aplicação

// Login
// Cadastro
// Alterar
// Excluir
import connect from "./database";

async function login(email, password){
    const {db} = await connect()

    const user = {
        email: email,
        password: password
    }

    const collection = db.collection("users")

    const options = {
        projection: {
            password: false
        }
    }
    const response = collection.findOne(user, options)

    return response
}

export default login