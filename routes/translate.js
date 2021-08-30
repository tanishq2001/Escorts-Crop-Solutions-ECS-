var express = require('express');
var noterouter = express.Router();
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const translate = require('@vitalets/google-translate-api');





noterouter.route('/')
.post((req, res, next) => {
   // console.log(req.body);
    translate(req.body.text, {to: 'hi'}).then(response => {
        //console.log(response.text);
        //=> I speak English
        //console.log(response.from.language.iso);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response.text);
        
        //=> nl
    }, (err) => next(err))
    .catch((err) => next(err));

})

module.exports = noterouter;