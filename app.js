'use-strict'
const express = require('express')
const fs = require("fs");

app = express()
const router = require('./routers/router')

//set up all config data to be passed to the front end and store it in a json object.
let siteConfig = fs.readFileSync("./site-config.json")
const siteInfo = JSON.parse(siteConfig);

app.use(function (req, res, next) {
  res.locals.site = siteInfo
  next()
})

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

app.listen(3000)