import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import expressValidator from 'express-validator';
import * as errorHandlers from './handlers/errors';

// Initialize express
const app = express();

// Logging information in the console
app.use(morgan('dev'));

// Requset body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// Attach express validator to requests
app.use(expressValidator());

// Routes
app.use('/', routes);

// Handle Errors
app.use(errorHandlers.notFound);

app.use(errorHandlers.showErrors);

export default app;