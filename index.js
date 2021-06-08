const express = require('express');
const http = require('http');
const morgan = require('morgan');
const { dirname } = require('path');
const hostname = 'localhost';
const bodyParser = require('body-parser');
const port = 3000;

const app = express();


app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.json());
app.all('/dishes',(req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});
app.get('/dishes',(req,res,next)=>{
    res.end('Will send all dishes to you');
});
app.post('/dishes',(req,res,next)=>{
    res.end('Will add the dish: '+req.body.name +' with details: '+req.body.description);
});
app.put('/dishes',(req,res,next)=>{
    res.statusCode=404;
    res.end('put method not supported');
});
app.delete('/dishes',(req,res,next)=>{
    res.end('Will delete all the dishes');
});

app.get('/dishes/:dishID',(req,res,next)=>{
    res.end('Will send dish:' +req.params.dishID);
});
app.post('/dishes/:dishID',(req,res,next)=>{
    res.statusCode=404;
    res.end('post request not supported on /dishes/'+ req.params.dishID);
});
app.put('/dishes/:dishID',(req,res,next)=>{
    res.write('updating the dish:'+ req.params.dishID+ '\n');
    res.end('Will update the dish: '+ req.body.name +'with description:' +req.body.description);
});
app.delete('/dishes/:dishID',(req,res,next)=>{
    res.end('Will delete the dish:' + req.params.dishID);
});
const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});