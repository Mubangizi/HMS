const { Mulago} = require('../models')


const registerMulagoPatients = async (req, res) => {

    const patient= req.body;

    await Mulago.create(patient).then((patient) => {
        res.status(200).json(patient)
    }).catch((error) => {
        console.log(error)
    })
}
const getMulagoPatients = async (req, res) => {

    await Mulago.findAll({ attributes: { exclude: ['updatedAt', 'createdAt'] } }).then((mulagoPatients) => {
        res.status(200).json(mulagoPatients)
    }).catch((error) => {
        console.log(error)
    })
}



module.exports = {
    getMulagoPatients,
    registerMulagoPatients
}

