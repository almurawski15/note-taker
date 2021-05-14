// dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// initializes express 
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname));

// routes
require('./routes/routes')(app);

// setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});