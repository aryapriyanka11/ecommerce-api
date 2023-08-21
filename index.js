const express = require('express');
const db = require('./config/mongoose.js');

// Creating an App with Express
const app = express();
const port = 4000;

app.use(express.json()) // To get the object in the form JSON 
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/',require('./routes/product'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running server:  ${err}`);
        return;
    }
    console.log(`Server up and running on port:  ${port}`);
});