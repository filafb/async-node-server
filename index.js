const express = require('express')
const app = express()


app.get('/:id', (req, res, next) => {
  for (let i = 0; i < Number(req.params.id); i++) {
    continue
  }
  console.log(`resquest to /${req.params.id} done`)
  res.send(`done ${req.params.id}`)
})


app.listen(3000, () => console.log('listening'))


