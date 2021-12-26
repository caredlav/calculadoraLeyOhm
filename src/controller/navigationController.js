const models = require('../model')

const navigationController = {
    getHome: (req, res, next) => {
        res.render('index', { title: "Calculadora para la Ley de Ohm" });
    },
    getVoltaje: (req, res) => {
        models.voltajes.findAll()
            .then(record => {
                res.render('voltaje', { registro: record });
            })
            .catch(error => console.log(error));
    },
    calcularVoltaje: (req, res) => {
        models.voltajes.newRecord(req.body.corriente, req.body.resistencia)
            .then(result => {
                res.redirect('/voltaje')
            })
            .catch(error => console.log(error));
    },
    getCorriente: (req, res) => {
        models.corrientes.findAll()
            .then(record => {
                res.render('corriente', { registro: record });
            })
            .catch(error => console.log(error));
    },
    calcularCorriente: (req, res) => {
        models.corrientes.newRecord(req.body.voltaje, req.body.resistencia)
            .then(result => {
                res.redirect('/corriente')
            })
            .catch(error => console.log(error));
    },
    getResistencia: (req, res) => {
        models.resistencias.findAll()
            .then(record => {
                res.render('resistencia', { registro: record });
            })
            .catch(error => console.log(error));
    },
    calcularResistencia: (req, res) => {
        models.resistencias.newRecord(req.body.voltaje, req.body.corriente)
            .then(result => {
                res.redirect('/resistencia')
            })
            .catch(error => console.log(error));
    }
}

module.exports = navigationController;