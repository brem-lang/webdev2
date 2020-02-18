<<<<<<< HEAD
const express = require('express')
const app = express()
const fs = require('fs')

app.get('/books', function(req, res){
  const filename = process.argv[3]
  fs.readFile(filename, function(e, data) {
    if (e) return res.sendStatus(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])
=======
const express = require('express')
const app = express()
const fs = require('fs')

app.get('/books', function(req, res){
  const filename = process.argv[3]
  fs.readFile(filename, function(e, data) {
    if (e) return res.sendStatus(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])
>>>>>>> 896398106047ae73aa180e5ce935cd35d13f065b
