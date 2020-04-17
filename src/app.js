require('dotenv/config');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const URL = require('./constants/connect');

const app = express();

mongoose.connect(URL, {useNewUrlParser: true})
    .then(() => {
        console.log('connect database');
        serverRun();
    })
    .catch(error => console.log(error));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', routes.user);
// app.use('/api', routes.task);

function serverRun() {
    app.listen(process.env.PORT, () => {
        console.log(`Server run: http://localhost:${process.env.PORT}`);
    });
}