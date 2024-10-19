const express = require('express');
const mongoose = require('mongoose');
const Patient = require('./models/patient');
const { logRequest } = require('./utils/utils');

const app = express();

mongoose.connect('mongodb+srv://sololectura:sololectura@cluster0.c8tq0vp.mongodb.net/catsalut')
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('Error al conectar a la base de datos', err));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const totalPatients = await Patient.countDocuments();
        res.render('home', { totalPatients });
    } catch (err) {
        res.status(500).send('Error al cargar la página de inicio');
    }
});

app.get('/api/patients', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json({
            message: "Query executed successfully",
            results: patients
        });
    } catch (err) {
        res.status(500).send('Error al obtener los pacientes');
    }
});

app.get('/form', (req, res) => {
    res.render('form');
});

app.get('/check', async (req, res) => {
    const ssn = req.query.ssn;

    try {
        const patient = await Patient.findOne({ ssn });
        logRequest(`Se ha realizado una consulta sobre el paciente número ${ssn}`);

        if (patient) {
            res.render('patient-info', { patient });
        } else {
            res.render('patient-info', { patient: null, message: 'El paciente no existe en la base de datos' });
        }
    } catch (err) {
        res.status(500).send('Error al verificar el paciente');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
