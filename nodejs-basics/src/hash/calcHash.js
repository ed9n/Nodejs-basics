import { createHash } from 'crypto';
import { readFile } from 'fs';

export const calculateHash = async () => {
    const hash = createHash('sha256');
    readFile('./files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {
        if (err) throw new Error(err);
        hash.update(data);
        console.log(hash.digest('hex'));
    });
};

calculateHash();