const { Kiruddu} = require('../models')


const registerKirudduPatients = async (req, res) => {

    const patient= req.body;

    await Kiruddu.create(patient).then((patient) => {
        res.status(200).json(patient)
    }).catch((error) => {
        console.log(error)
    })
}
const getKirudduPatients = async (req, res) => {

    await Kiruddu.findAll({ attributes: { exclude: ['updatedAt', 'createdAt'] } }).then((kirudduPatients) => {
        res.status(200).json(kirudduPatients)
    }).catch((error) => {
        console.log(error)
    })
}



module.exports = {
    getKirudduPatients,
    registerKirudduPatients
}

