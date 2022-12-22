// Realizar operações de CRUD da aplicação

// Login
// Cadastro
// Alterar
// Excluir
import connect from "./database";

const login = async (email, password) =>{
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



const getUser = async (id) =>{
    const {db} = await connect()

    const user = {
        id: id,
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

export {
    login,
    register,
    getUser
} 
