import { workerData, parentPort } from 'worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {

    if (workerData == null || workerData == undefined || typeof workerData != 'number') {
        const errData = {
            status: 'error',
            data: null
        }
        parentPort.postMessage(errData);
    } else {
        const data = {
            status: 'resolved',
            data: nthFibonacci(workerData)
        }
        parentPort.postMessage(data);
    }
};

sendResult();