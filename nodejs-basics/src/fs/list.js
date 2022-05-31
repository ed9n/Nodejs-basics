import { readdir } from 'fs';

export const list = async () => {
    readdir('./files/', (err, files) => {
        if (err) throw new Error('FS operation failed');
        files.forEach(file => {
            console.log(file);
        });
    });
};

list();