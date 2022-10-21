const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.listen(PORT, () => {
  console.log(`Express OI OI server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send("OI! OI! OI! OI!")
})