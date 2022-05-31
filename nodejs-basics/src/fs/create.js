import { access, open, writeFile } from 'fs';

const path = './files/fresh.txt';

export const create = async () => {
    access(path, (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        } else {

            open(path, 'w', (err) => {
                if (err) {
                    throw new Error(err);
                }
            });

            writeFile(path, 'I am fresh and young', (err) => {
                if (err) {
                    throw new Error(err);
                }
            });
        }
    });
};

create();