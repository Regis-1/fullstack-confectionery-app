const express = require('express')
const app = express()

const cakesController = require('./Controllers/CakesController')
const employeesController = require('./Controllers/EmployeesController')

app.use(express.static('public'))

app.get('/api/cakes', cakesController.getAll)

app.get('/api/cakes/ids', cakesController.getAllId)

app.get('/api/cakes/:id', cakesController.getById)

app.get('/api/img/:id', cakesController.getImgById)

app.get('/api/employees/:id', employeesController.getById)

const server = app.listen(8081, () => {
  const host = server.address().address
  const port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)
})