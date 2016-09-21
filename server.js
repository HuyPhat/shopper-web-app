var express = require('express')
var cors = require('cors')
var app = express()
var sales = require('./routes/sales')
var products = require('./routes/products')

app.use(cors())
app.use('/', express.static(__dirname + '/public/app-client/build'))
app.use('/api/v1', sales)
app.use('/api/v1', products)

app.listen(4000)
console.log('Server is listening to port 4000')