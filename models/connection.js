const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin-nass:Madridreal22@cluster0.cev1xnl.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));