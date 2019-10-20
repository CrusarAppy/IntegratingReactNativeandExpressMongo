const express = require ('express');
const app = express();
const mongoose = require('mongoose');
require ('dotenv/config');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

//middleware cross domain

app.use(cors());

// default parser 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//import routes

const postsroute = require('./routes/post');

app.use('/post' , postsroute);

// routes
app.get('/' , (req,res) => {
    res.send("we are at the home");
});

// connect to db

mongoose.connect(
process.env.DB_CONNECTION,
{   useNewUrlParser: true ,
    useUnifiedTopology : true
},
() =>  console.log('connected to db')
);

// how to listen to the server
const port = process.env.PORT || 3001 
app.listen(port);


