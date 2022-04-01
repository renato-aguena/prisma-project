const bodyParser = require('body-parser')
const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  console.log('req.params', req.params)
  console.log('req.query', req.query)
  res.json({
    status: 200
  })
})

app.post('/', async (req, res) => {
  try {
    const { email, username, address } = req.body
    await prisma.users.create({
      data: {
        email: email || 'alice@prisma.io',
        username: username || 'Alice',
        address: address || 'estou indo dormir contente'
      }
    })
    res.json({
      status: 200,
      body: 'ok'
    })
  } catch (error) {
    console.log(error)
  }
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`running on port ${process.env.PORT || 8080}`)
})
