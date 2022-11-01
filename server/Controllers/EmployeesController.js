const sqlite3 = require('sqlite3')
const db = new sqlite3.Database(('./public/db/database.db'))

const getById = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  db.get(
    `select * from EMPLOYEES where employee_id = "${req.params.id.toUpperCase()}"`,
    [],
    (err, row) => {
      if (err)
        throw err

      res.send(row)
    }
  )
}

module.exports = {
  getById
}