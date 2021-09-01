const { Int32 } = require('mongodb');
const moongoose = require('mongoose');
const Schema = moongoose.Schema;

const BookSchema = new Schema({
    Name:{
        type: String,
        required: true,
    },
    amount: {
        type:Number,
        required: true,
    },
    date:{
        type: Number,
        required:true
    }
},{
    timestamps: true
});

const AccoutSchema = new Schema({
    id: {
        type:String,
        required: true,
    },
    Receivable: {
        type: Number,
        required: true,
    },
    payable: {
        type: Number,
        required: true,
    },
    book: {BookSchema}
},{
    timestamps: true
});
 var Account = moongoose.model('account', AccoutSchema);
 module.exports = Account;