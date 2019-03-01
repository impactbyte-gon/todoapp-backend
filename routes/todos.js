var express = require('express')
var router = express.Router()

const todos = [
  {
    id: 1,
    text: 'Learning JavaScript'
  },
  {
    id: 2,
    text: 'Learning to Work'
  },
  {
    id: 3,
    text: 'Learning GitHub'
  }
]

router.get('/', function(req, res, next) {
  res.send({
    message: 'Todos',
    data: todos
  })
})

module.exports = router
