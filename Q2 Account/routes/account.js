const e = require('express');
var express = require('express');
var noterouter = express.Router();

const Account = require('../models/account');



const app = express();


xx={
    id:"Kaku",
    Receivable:0,
    payable:0,
    book:[]
}
Account.create(xx);

noterouter.route('/')
.post((req, res, next) => {
    var x;
    if(req.body.account_type === "CR"){
        x=parseInt(req.body.amount);
        xx.Receivable+=x;
    }
    else{
        x=parseInt(req.body.amount);
        xx.payable+=x;
    }
    let cook={
        Name: req.body.name,
        amount: x,
        date: req.body.date
    };
    xx.book.push(cook);
    
           res.statusCode = 200;
           res.setHeader('Content-Type', 'application/json');
           res.json(xx);
    });
module.exports = noterouter;