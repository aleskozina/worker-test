// App.js
import Worker from 'worker-loader!./worker.ts';
console.log(Worker);

const worker = new Worker();

worker.postMessage({ a: 1 });
worker.onmessage = function (event) {};

worker.addEventListener("message", function (event) {});