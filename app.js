const express = require('express')

app = express()
const router = require('./routers/router')

const { resolveInclude } = require("ejs")
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

app.listen(3000)