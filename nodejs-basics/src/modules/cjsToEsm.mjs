import { sep, dirname } from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { readFile } from 'fs';
import { createServer as createServerHttp } from 'http';
import { } from './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = readFile('./files/a.json', 'utf8', (err, data) => {
        if (err) throw new Error(err);
        console.log(JSON.parse(data));
    });
} else {
    unknownObject = readFile('./files/b.json', 'utf8', (err, data) => {
        if (err) throw new Error(err);
        console.log(JSON.parse(data));
    });
};

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export default {
    unknownObject,
    createMyServer,
};

