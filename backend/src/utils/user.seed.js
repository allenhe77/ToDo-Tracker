import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({path: './config/.env'});

import {readFile} from './file.utils.js';
import {rootDir} from '../app.js';
import {User} from '../models/User.js';
import { runInContext } from 'vm';

const namesFile = path.resolve(rootDir, 'resources/namesSeed.txt');
const names = await readFile(namesFile);

// src: https://medium.com/@pkosiec/seeding-mongodb-database-the-right-way-32a8a0e75490
const namesObj = names.map(name => ({
    userName: name,
    nickName: '',
    email: 'abc@gmail.com',
    password: '12345',
    group: 'None',
}));

const db_url = process.env.DB_URL || 'error';

async function run(){
    try{
        await mongoose.connect(db_url, {useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to mongodb...');
        
        await mongoose.connection.dropDatabase();
        console.log('Database cleared...');
        
        await User.insertMany(namesObj);
        console.log('Database initialized...');

        let users = await User.find({}).exec();
        console.log(users.length);
        
        users.forEach(user => console.log(user));

        await mongoose.connection.close();
        console.log("Database connection closed");
    } catch(err) {
        console.log('error', err);
        process.exit(1);
    }
}

run();