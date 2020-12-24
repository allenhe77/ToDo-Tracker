import express from 'express';
import bodyparser from 'body-parser';

// routes
// import userRouter from './routes/UserRoutes.js';
// import taskRouter from './routes/TaskRouter.js';

const app = express();

// register middleware & routes
app.use(bodyparser.json());


// app.use('/api/v1/users', users);
// app.use('/api/v1/users/tasks', tasks);

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

import {__dirName} from './utils/file.utils.js';
const rootDir = __dirName(import.meta.url);
console.log(rootDir);
export {rootDir};