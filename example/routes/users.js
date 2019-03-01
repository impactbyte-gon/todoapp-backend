const express = require('express')
const router = express.Router()

// app.use('/users', usersRouter)
// app.get('/users')
router.get('/', (req, res, next) => {
  res.send({
    users: []
  })
})

// app.get('/users/:id')
router.get('/:id', (req, res, next) => {
  res.send({
    user: {}
  })
})

// app.post('/users')
router.post('/', (req, res, next) => {
  res.send({
    message: 'post'
    users: []
  })
})

module.exports = router
