const express = require('express')
const router = express.Router()

//navigation links routes
router.get('/', function(req, res){res.send('home page')})

module.exports = router