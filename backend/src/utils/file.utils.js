import {promises as fs} from 'fs';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

async function readFile(fileName){
    try{
        const data = await fs.readFile(fileName);
        return data.toString().split('\n');
    } catch(err){
        console.log(err);
    }
}

// src: https://stackoverflow.com/a/50052194
function __dirName(url){
    return dirname(fileURLToPath(url));
}

export {readFile, __dirName};