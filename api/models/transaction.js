const mongoose = require('mongoose');


  const transactionSchema = new mongoose.Schema({

    type: String,
    userId: String,
    amount: Number,
    plan: String,
    date: Date,
    description: String

});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;