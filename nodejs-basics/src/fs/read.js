import { readFile } from 'fs';

export const read = async () => {
    readFile('./files/fileToRead.txt', 'utf8', (err, content) => {
        if (err) throw new Error('FS operation failed');
        console.log(content);
    });
};

read();