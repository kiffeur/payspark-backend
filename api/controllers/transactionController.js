const Transaction = require('../models/transaction');

/*exports.getTransactions = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Retrieve transactions for the given user ID
    const transactions = await Transaction.find({ userId }).select('-_id -__v -updatedAt -createdAt');

    // Send the transactions as a response
    res.json(transactions);
  } catch (error) {
    console.error('Error retrieving transactions:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
*/


// ...

Transaction.find({ userId: req.params.id }, (err, transactions) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Transactions de l'utilisateur ${req.params.userId} :`);
    console.log(transactions);
  }
});

// ...

