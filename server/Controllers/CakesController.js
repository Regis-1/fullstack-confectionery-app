const sqlite3 = require('sqlite3')
const db = new sqlite3.Database(('./public/db/database.db'))
const fs = require('fs')

const getAll = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  db.all(
    `select * from CAKES`,
    [],
    (err, rows) => {
      if (err)
        throw err

      res.send(rows)
    }
  )
}

const getAllId = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  db.all(
    `select cake_id from CAKES`,
    [],
    (err, rows) => {
      if (err)
        throw err

      res.send(rows.map(item => item.cake_id))
    }
  )
}

const getById = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  db.get(
    `select * from CAKES where cake_id = "${req.params.id.toUpperCase()}"`,
    [],
    (err, row) => {
      if (err)
        throw err

      res.send(row)
    }
  )
}

const getImgById = (req, res) => {
  const s = fs.createReadStream(`./public/img/${req.params.id.toUpperCase()}.jpg`)
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  s.on('error', () => {
    s.close()
    res.sendStatus(404)
  })
  
  s.on('open', () => {
    res.set('Content-Type', 'image/jpeg')
    s.pipe(res)
  })
}

module.exports = {
  getAll,
  getById,
  getImgById,
  getAllId
}