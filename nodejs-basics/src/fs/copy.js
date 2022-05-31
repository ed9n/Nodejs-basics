import { access, copyFile, mkdir, readdir } from 'fs';

const folder = './files/';
const copyFolder = './files_copy/';

export const copy = async () => {
    access(folder, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            mkdir(copyFolder, (err) => {
                if (err) {
                    throw new Error('FS operation failed');
                } else {
                    readdir(folder, (err, files) => {
                        if (err) throw new Error(err);
                        files.forEach(file => {
                            copyFile(`${folder}${file}`, `${copyFolder}${file}`, (err) => {
                                if (err) {
                                    throw new Error(err);
                                }
                            });
                        });
                    });
                }
            });
        }
    });
};

copy();