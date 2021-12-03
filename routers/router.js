const express = require('express')
const router = express.Router()

router.get('/', function(req, res){ res.render('index') })
router.get('/sitemap.xml', function (req, res) { res.sendFile("sitemap.xml", {root: "./"}) })
router.get("/robots.txt", function (req, res) { res.sendFile("robots.txt", { root: "./" }) })

module.exports = router