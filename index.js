require('dotenv').config();
require('dotenv-safe').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

require('./routes/routes')(app);

// const port = process.env.PORT || 5000
const port = 8080
app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})