var express = require('express')
var router = express.Router()
var data = require('../data/bestsellings.json')

// middleware that is specific to this router
router.use(function timeLog(req,res,next) {
	console.log('Time: ', Date.now())
	next()
})

// define the home page route
router.get('/', function(req, res) {
	// res.setHeader('Content-Type', 'application/json')
	res.json(data)
})

//
router.get('/detail', function(req,res){ 
	res.send('Bestselling detail')
})

module.exports = router