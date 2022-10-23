const sqlite3 = require('sqlite3')
const express = require('express')
const app = express()
const db = new sqlite3.Database(('./public/db/database.db'))
const fs = require('fs')

app.use(express.static('public'))

app.get('/api/cakes', (req, res) => {
  db.all(
    `select * from CAKES`,
    [],
    (err, rows) => {
      if (err)
        throw err

      res.send(rows)
    }
  )
})

app.get('/api/cakes/:id', (req, res) => {
  db.get(
    `select * from CAKES where cake_id = "${req.params.id}"`,
    [],
    (err, row) => {
      if (err)
        throw err

      res.send(row)
    }
  )
})

app.get('/api/img/:id', (req, res) => {
  const cakeId = req.params.id
  const s = fs.createReadStream(`./public/img/${cakeId.toUpperCase()}.jpg`)

  s.on('error', () => {
    s.close()
    res.sendStatus(404)
  })

  s.on('open', () => {
    res.set('Content-Type', 'image/jpeg')
    res.setHeader('Access-Control-Allow-Origin', '*')
    s.pipe(res)
  })
})

const server = app.listen(8081, () => {
  const host = server.address().address
  const port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)
})