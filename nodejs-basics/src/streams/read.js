import { createReadStream } from 'fs';

export const read = async () => {
    const readableStream = createReadStream('./files/fileToRead.txt', 'utf-8');
    readableStream.on('data', chunk => process.stdout.write(chunk));
};

read();