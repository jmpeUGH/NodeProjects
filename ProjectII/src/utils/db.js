const mongoose = require('mongoose');

const user = process.env.USER;
const psw = process.env.PSW;
const dbName = process.env.DB_NAME;

const DB_URL = `mongodb+srv://${user}:${psw}@cluster0.3nhnowi.mongodb.net/${dbName}?retryWrites=true&w=majority`


const connect = async () => {
    try{
        const db = await mongoose.connect(DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const {name,host} = db.connection;
        console.log(`Conectado a ${name} en ${host}`);
    }catch(error){
        console.log(`Error al conectar a la base de datos: ${error}`)
    }
};

module.exports = {connect};