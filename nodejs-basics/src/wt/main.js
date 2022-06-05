import { Worker, workerData } from 'worker_threads';
import { cpus } from 'os';


export const performCalculations = async () => {
    const cpuCount = cpus().length;
    let count = 10;
    let arr = [];
    for (let i = 0; i < cpuCount; i++) {
        const Workers = new Promise((resolve, reject) => {
            const worker = new Worker(`./worker.js`, { workerData: count++ })
            worker.postMessage(workerData);
            worker.on('message', resolve);
            worker.on('error', reject);
        })

        try {
            arr.push(await Workers);
        } catch {

        }
    }
    console.log(arr)
};

performCalculations();