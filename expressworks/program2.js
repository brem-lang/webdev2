<<<<<<< HEAD
const express = require('express')
const app = express()

app.put('/message/:id', function(req, res){
  const id = req.params.id
  const str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.send(str)
})

=======
const express = require('express')
const app = express()

app.put('/message/:id', function(req, res){
  const id = req.params.id
  const str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.send(str)
})

>>>>>>> 896398106047ae73aa180e5ce935cd35d13f065b
app.listen(process.argv[2])