'use-strict'
const express = require('express')
const fs = require("fs");

app = express()
const router = require('./routers/router')

//set up all site config data to be passed to the front end views from site-config.json.
let siteConfig = fs.readFileSync("./site-config.json")
const siteInfo = JSON.parse(siteConfig);

app.use(function (req, res, next) {
  res.locals.site = siteInfo
  next()
})

app.use(express.static('public'))
app.set('views', 'views', "views/admin-views/")
app.set('view engine', 'ejs')

app.use('/', router)

app.listen(3000)