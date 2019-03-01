var express = require('express')
var router = express.Router()

// app.get('/users')
router.get('/', function(req, res, next) {
  res.send({
    message: 'users'
  })
})

module.exports = router
