import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

export const decompress = async () => {
    const unzip = createUnzip();
    const input = createReadStream('archive.gz');
    const output = createWriteStream('fileToCompress.txt');
    input.pipe(unzip).pipe(output);
};

decompress();