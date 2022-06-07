import { createWriteStream } from 'fs';
import { stdin } from 'process';

export const write = async () => {
    const writableStream = createWriteStream('./files/fileToWrite.txt');
    stdin.on('data', data => writableStream.write(data));
};

write();