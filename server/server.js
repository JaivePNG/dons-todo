var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var routes = require('./routes')

var PORT = process.env.PORT || 3000
var app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))

app.get('/v1/list', routes.getList)
app.post('/v1/add', routes.add)
app.put('/v1/update/:id', routes.update)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
