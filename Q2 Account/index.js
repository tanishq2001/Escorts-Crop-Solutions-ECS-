const express = require('express');
const http = require('http');

const { dirname } = require('path');
const hostname = 'localhost';
const bodyParser = require('body-parser');
const port = 3000;


const account = require('./routes/account');



const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/Kaku';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });


app.use(express.static(__dirname+'/public'));


app.use('/account',account);

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});