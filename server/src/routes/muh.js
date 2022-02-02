const express = require('express')
const router = express.Router()
const { getMUHPatients,registerMUHPatients } = require('../controllers/MUHController')
const authorize = require('../middlewares/authorize')



router.post('/registerMUHPatients', registerMUHPatients)

router.get('/getMuhPatients', getMUHPatients)


module.exports = router