const { parentPort, workerData } = require('worker_threads');

let count = 0
for(let i = 0; i < workerData.id; i++) {
  count++
}

parentPort.postMessage(count)

process.exit()
