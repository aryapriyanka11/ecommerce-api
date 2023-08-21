const mongoose = require('mongoose');
const dbURL = ("mongodb+srv://priyankaryaofficial:LRaHOn4St9etJrK5@cluster0.szak9mq.mongodb.net/?retryWrites=true&w=majority")

// 'mongodb://127.0.0.1/ecom-Api'
mongoose.connect(dbURL)
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });