var express = require('express')
var app = express()

app.get('/123', function (req, res) {
    console.log('123')
  res.send('Hello 123')
})
app.get('/zsl', function (req, res) {
  console.log('zsl')
  res.send('Hello zsl')
})

app.listen(3000,function(){
  console.log('running on port 3000... vist http://localhost:3000')
})
