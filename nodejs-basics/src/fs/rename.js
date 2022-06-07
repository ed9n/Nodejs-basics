import { rename as renamee } from 'fs';

export const rename = async () => {
    renamee('./files/wrongFilename.txt', './files/properFilename.md', (err) => {
        if (err) throw new Error('FS operation failed');
    });
};

rename();