const express = require('express')
const router = express.Router()
const namesController = require('../app/controller/namesController')

router.get('/names', namesController.list)
router.post('/names', namesController.create)
router.get('/name/:id', namesController.show)
router.get('/split/name', namesController.splshow)
router.get('/calculate/age', namesController.age)

module.exports = router