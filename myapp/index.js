const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Home page')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/contact', (req, res) => {
  res.send('Contact Page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

