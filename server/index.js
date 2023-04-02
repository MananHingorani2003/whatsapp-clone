import express from 'express';
import Route from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

import Connection from './database/db.js';

Connection();

app.use (cors());
app.use (bodyParser.json({extended: true}));
app.use (bodyParser.urlencoded({extended: true}));
app.use ('/', Route);

const PORT = 8000;

app.listen (PORT, () => console.log (`Server is running successfully on PORT, ${PORT}`));