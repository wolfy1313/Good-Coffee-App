const express = require('express')
const routes = require('./routes')
const db = require('./db')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))


app.use('/api', routes)


app.listen(PORT, () => {
  console.log(`Express OI OI server listening on port ${PORT}`)
})