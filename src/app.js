import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';
import { URL } from './constants/connect';

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


function serverRun() {
    app.listen(process.env.PORT, () => {
        console.log(`Server run: http://localhost:${process.env.PORT}`);
    });
}