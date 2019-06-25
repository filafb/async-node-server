const express = require('express')
const app = express()
const { fork } = require('child_process')


app.get('/:id', (req, res, next) => {
  const loop = fork("./loop.js")
  loop.send({id: Number(req.params.id)})
  loop.on('exit', () => {
    res.send(`done ${req.params.id}`)
  })
})

app.listen(3000, () => console.log('listening'))



