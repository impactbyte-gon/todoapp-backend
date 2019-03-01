var express = require('express')
var router = express.Router()

let nextId = 4
let todos = [
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

router.get('/', (req, res, next) => {
  res.send({
    message: 'Get All Todos',
    data: todos
  })
})

router.post('/', (req, res, next) => {
  const newTodos = todos.concat({
    id: nextId,
    text: req.body.text
  })
  todos = newTodos
  nextId++

  res.send({
    message: 'Created New Todo',
    newTodos: newTodos
  })
})

module.exports = router
