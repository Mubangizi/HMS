const { MUH} = require('../models')


const registerMUHPatients = async (req, res) => {

    const patient= req.body;

    await MUH.create(patient).then((patient) => {
        res.status(200).json(patient)
    }).catch((error) => {
        console.log(error)
    })
}
const getMUHPatients = async (req, res) => {

    await MUH.findAll({ attributes: { exclude: ['updatedAt', 'createdAt'] } }).then((MUHPatients) => {
        res.status(200).json(MUHPatients)
    }).catch((error) => {
        console.log(error)
    })
}



module.exports = {
    getMUHPatients,
    registerMUHPatients
}

