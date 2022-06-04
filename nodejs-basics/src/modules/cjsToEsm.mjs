import { sep, dirname } from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { createRequire } from "module";

import './files/c.js';

const require = createRequire(import.meta.url);

const fileJsonA = require('./files/a.json');
const fileJsonB = require('./files/b.json');

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = fileJsonA;
} else {
    unknownObject = fileJsonB;
}

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

