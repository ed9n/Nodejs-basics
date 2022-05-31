import { unlink } from 'fs';

export const remove = async () => {
    unlink('files/fileToRemove.txt', (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });
};

remove();