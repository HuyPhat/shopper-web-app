var express = require('express')
var app = express()
var bestsellings = require('./routes/bestsellings')

app.use('/', express.static(__dirname + '/public/app-client/build'));
app.use('/bestsellings', bestsellings)

app.listen(4000)
console.log('Server is listening to port 4000')