import { MongoClient } from "mongodb";

const database_url = process.env.DATABASE_URL

const client = new MongoClient(database_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

export default async function connect(){
    
    await client.connect()
    
    const db = client.db("database") // Nome do banco de dados

    return {db, client}
}
