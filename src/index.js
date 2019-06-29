const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app); //SUPORTE AO PROTOCOLO HTTP
const io = require('socket.io')(server); //SUPORTE AO WEBSOCKET 

//CONEXAO COM BANCO DE DADOS
mongoose.connect('mongodb+srv://webfaria:C12131415f@cluster0-irhas.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
});

//PERMITE INVIAR AS INFORMAÇÕES EM TEMPO REAL
app.use((req, res, next) =>{
    req.io = io;
    next();
})

app.use(cors()); //LIBERA ACESSO TOTAL DE TODAS AS URLS

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

app.listen(3333);
