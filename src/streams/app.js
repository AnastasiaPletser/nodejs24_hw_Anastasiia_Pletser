import { readStream, writeStream, duplexStream } from './stream.js';
import path from 'path';

const inputFilePath = path.join('./users.js');
const outputFilePath = path.join('./output.js');

const input = readStream(inputFilePath);
const output = writeStream(outputFilePath);

input
    .pipe(duplexStream) 
    .pipe(output)       

output.on('finish', () => {
    console.log('The file was successfully processed and written to output.js');
});
