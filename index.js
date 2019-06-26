const express = require('express')
const app = express()
const { Worker, isMainThread } = require('worker_threads');



app.get('/:id', (req, res, next) => {
  if(isMainThread) {
    const worker = new Worker('./loop.js', { workerData: {id: Number(req.params.id)}})
    worker.on('message', (message) => {
      console.log(`${message} received from worker`)
    })
    worker.on('exit', () => {
      console.log(`request to /${req.params.id} done`)
      res.send(`done ${req.params.id}`)
    })
  }
})

app.listen(3000, () => console.log('listening'))


