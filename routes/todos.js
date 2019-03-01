var express = require('express')
var router = express.Router()

let nextId = 1
let todos = [
  {
    id: 1,
    text: 'Learning'
  }
]

// app.get('/todos')
router.get('/', (req, res, next) => {
  res.send({
    message: 'Get All Todos',
    todos: todos
  })
})

// app.post('/todos')
router.post('/', (req, res, next) => {
  const todo = {
    id: nextId,
    text: req.body.text
  }
  const newTodos = todos.concat(todo)
  todos = newTodos
  nextId++

  res.send({
    message: 'Created New Todo',
    todo: todo,
    newTodos: newTodos
  })
})

module.exports = router
