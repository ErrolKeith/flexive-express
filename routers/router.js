const express = require('express')
const router = express.Router()

//Public routes
router.get('/', function(req, res){ res.render('index') })
router.get('/sitemap.xml', function (req, res) { res.sendFile("sitemap.xml", {root: "./"}) })
router.get("/robots.txt", function (req, res) { res.sendFile("robots.txt", { root: "./" }) })

//Restricted routes and/or routes in robots.txt
router.get('/admin', function (req, res) { res.send('admin login page') })//login
router.get('/admin/site-config', function( req, res) { res.render('admin-views/admin')})//input for config file

module.exports = router