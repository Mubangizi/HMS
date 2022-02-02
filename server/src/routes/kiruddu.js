const express = require('express')
const router = express.Router()
const { getKirudduPatients,registerKirudduPatients } = require('../controllers/kirudduController')
const authorize = require('../middlewares/authorize')



router.post('/registerKirudduPatients', registerKirudduPatients)

router.get('/getKirudduPatients', getKirudduPatients)


module.exports = router