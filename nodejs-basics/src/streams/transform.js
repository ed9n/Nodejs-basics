import { Transform } from 'stream';

export const transform = async () => {
    const input = process.stdin;
    const output = process.stdout;

    const transform2 = new Transform({
        transform(chunk, encoding, callback) {
            const chunkString = chunk.toString().trim();
            const reversChunk = chunkString.split('').reverse().join('');
            callback(null, reversChunk + '\n');
        }
    })

    input.pipe(transform2).pipe(output);
};

transform();