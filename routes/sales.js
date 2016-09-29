var express = require('express')
var router = express.Router()
var data = require('../data/bestsellings.json')
var sales = require('../data/sales.json')
var filteredSales = require('../data/new-filtered-sales.json')

// middleware that is specific to this router
router.use(function timeLog(req,res,next) {
	console.log('Time: ', Date.now())
	next()
})

// define the home page route
router.get('/sales', function(req, res) {
	// res.setHeader('Content-Type', 'application/json')
	res.json(sales)
})

router.get('/sales/:id', function(req, res) {
	const idParam = req.params.id
	const filterdProducts = filteredSales.filterdProducts
	const ret = filterdProducts.find(function(sale) {
		return sale._id === idParam
	})
	res.json(ret)
})

//
router.get('/sale/:id', function(req,res){ 
	console.log(req.params.id)
	var idParam = req.params.id
	var current = data.current
	var jsonResult = {}
	for(var k in current) {
		if (current[k]._id === idParam) {
			jsonResult = current[k]
			console.log(jsonResult)
		}
	}
	res.json(jsonResult)
})

module.exports = router