const express = require('express');
const http = require('http');

const morgan = require('morgan');
const { dirname } = require('path');
const hostname = 'localhost';
const bodyParser = require('body-parser');
const port = 3000;

//const dishrouter = require('./routes/dishrouter');
const translate = require('./routes/translate');



const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));


app.use('/translate',translate);

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});