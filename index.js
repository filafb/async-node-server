const express = require('express')
const app = express()
const cluster = require('cluster');

if(cluster.isMaster) {
  const numCPUs = require('os').cpus().length;
  console.log(`Master cluster ${process.pid} is running and setting up ${numCPUs} workers...`);

  for(let i = 0; i < numCPUs; i++){
    cluster.fork();
  }
  cluster.on('online', function(worker) {
    console.log(`Worker ${worker.process.pid} is online`)
  })

  cluster.on('exit', function (worker, code, signal) {
    console.log(`Worker ${worker.process.pid} died with code:${code} and signal: ${signal} `)
    console.log('Starting a new worker')
    cluster.fork();
  })
} else {
  app.get('/:id', (req, res, next) => {
    for(let i = 0; i < Number(req.params.id); i++){
      continue
    }
    console.log(`request to /${req.params.id} done`)
    res.send(`done ${req.params.id}`)
  })


  app.listen(3000, ()=> console.log('listening'))
}

