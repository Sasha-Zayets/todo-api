import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';
import { URL } from './constants/connect';

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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
app.use('/api', routes.task);

function serverRun() {
    app.listen(process.env.PORT, () => {
        console.log(`Server run: http://localhost:${process.env.PORT}`);
    });
}