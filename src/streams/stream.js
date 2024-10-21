import fs from 'fs';
import { Duplex } from 'stream';

const readStream = (filePath) => {
    return fs.createReadStream(filePath, {
        highWaterMark: 64 * 1024, 
    });
};

const writeStream = (filePath) => {
    return fs.createWriteStream(filePath);
};

const duplexStream = new Duplex({
    read(size) {
        console.log(`Reading data size: ${size} bytes`);
    },
    write(chunk, encoding, callback) {
        console.log('Some data is being processed:', chunk.toString());
        this.push(chunk); 
        callback();
    },
    final(callback) {
        console.log('Processing is complete.');
        callback();
    }
});

export { readStream, writeStream, duplexStream };

