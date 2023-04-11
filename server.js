const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const serverConfig = require('./configs/server.config')

const dbConfig = require('./configs/db.configs')

const app  = new express();
app.use(express.json());

require("./routes/restaurant.route")(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db= mongoose.connection;

mongoose.connect(dbConfig.url, {    
    useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function(){
    console.log("Connected to MongoDB Server ")
}).catch(function(err){
    console.log(err);
})

db.once("open", ()=>{
    console.log("Succefully connected to mongoDb");
})

db.on('error',()=>{
    console.log("Error connecting to mongoDB");
    process.exit();
})

app.get('/testroute', (req, res)=>{
    console.log("Server is up and running!");
    res.status(200).send("Server is running properly")
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
  });

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server is running at ${serverConfig.PORT}`);
})