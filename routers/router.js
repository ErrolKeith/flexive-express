const express = require('express')
const router = express.Router()


router.get('/', function(req, res){res.render('index')})

app.get('/sitemap.xml', function (req, res) {
  res.send('sitemap');
})

module.exports = router