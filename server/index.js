const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const port = 9000;
app.use(cors);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12waldivina51',
    database: 'fincontrol',
})

connection.connect((err)=>{
    if(err){
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão com o banco de dados MySQL estabelecida.');
})

app.listen(port, ()=>{
    console.log('Rodando')
})