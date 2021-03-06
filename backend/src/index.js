// Third Party Packages
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


console.log(rootDir);

// config
dotenv.config({path: './config/.env'});

// routes
//const users = require('./routes/UserRoutes');
//const tasks = require('./routes/TaskRouter');

// init of express app
const app = express ();

// middleware
app.use(bodyparser.json());

// src: https://www.robinwieruch.de/node-express-error-handling
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  return res.status(err.statusCode).json({
    status: err.status || 'err',
    err: err.toString()
  });
});

// app routes
//app.use('/api/v1/users', users);
//app.use('/api/v1/users/tasks', tasks);

// middleware
//src: https://medium.com/@SigniorGratiano/express-error-handling-674bfdd86139
app.all('*', (req, res, next) => {
  
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = 'fail';
  err.statusCode = 404;

  next(err);
});


app.get ('/', (req, res) => {
  res.send ('Hello World!');
});

// Port Env
const port = process.env.PORT || 3000;
const db_url = process.env.DB_URL || 'error';
console.log(db_url);
mongoose.connect(db_url)
  .then(() => console.log('Connected to mongodb...'))
  .catch(err => console.error('Error in connecting to MongoDb\n', err));

app.listen (port, () => {
  console.log (`Example app listening at http://localhost:${port}`);
});