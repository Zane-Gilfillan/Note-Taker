const express = require('express');
const path = require('path')
const fs = require('fs')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname));

require('./routes/routes')(app);

//listener

app.listen(PORT, () => {

    console.log('app is on port: ' + PORT)
});



  
