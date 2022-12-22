// Realizar operações de CRUD da aplicação

// Login
// Cadastro
// Alterar
// Excluir
import connect from "./database";

const get = async (email) =>{
    const {db} = await connect()

    const user = {
        email: email,
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


const register = async (email, password, name ) => {
    const {db} = await connect()

    const userRegister = {
        email: email,
        password: password,
        name: name,
    }

    const collection = db.collection("users")


    const response = collection.insertOne(userRegister)

    return response
    
}


export {
    register,
    get
} 
