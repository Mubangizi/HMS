const express = require('express')
const router = express.Router()
const { getMulagoPatients,registerMulagoPatients } = require('../controllers/mulagoController')
const authorize = require('../middlewares/authorize')



router.post('/registerMulagoPatients', registerMulagoPatients)

router.get('/getMulagoPatients', getMulagoPatients)


module.exports = router