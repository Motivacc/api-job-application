const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDb URL 

const dbHost = 'mongodb://localhost/motiva';

//conectamos la BD

mongoose.connect(dbHost);

// Creamos el Schema  de la BD

const applicantSchema = new mongoose.Schema({
    workbefore: {type:String, enum: ['Yes', 'No']},
    payrange: String,
    desposition: {type:String, enum: ['Costumer Service Representative', 'Spanish Costumer Service', 'Claims Representative', 'Salex Executive', 'Other']},
    name: String,
    psourname: String,
    msourname: String,
    dob: Date,
    age: Number,
    gender: {type:String, enum:['Male', 'Female']},
    pofbirth: String,
    nationality: String,
    city: {type:String, enum: ['Tijuana', 'Tecate', 'Mexicali', 'Rosarito', 'Ensenada']},
    satate: {type:String, enum: ['Baja California', 'Other']},
    zipcode: Number,
    street: String,
    streetNumber: String,
    appartNumber: String,
    homePhone: Number,
    mobileNumber: Number,
    secondaryPhone: String,
    radio: String,
    email: String,
    relation: {type: String, enum: ['Single', 'Married', 'Separated', 'Living Together']},
    spouseName: String,
    childrens:{ type: String, enum: ['1', '2', '3', '4', '5', 'Other']},
    fatherName: String,
    mothernAME: String,
    emergencyContact: String,
    relationshipContact: String,
    relcontactPhone: String,
    dependentYou: String,
    timeResident: String,
    education: String,
    school: String,
    graduationDate: Date,
    degree: String,
    englishProficiency: Number,
    englishWriteLevel: String,
    computerProficiency:{type: String, enum:['Basic', 'Intermediate', 'Advanced']},
    validVisa:{type: String, enum: ['Yes', 'No']},
    bodyTattos:{type: String, enum: ['Yes', 'No']},
    memberClub: String,
    criminalRecord:{type: String, enum: ['Yes', 'No']},
    prisionMexico:{type: String, enum: ['Yes', 'No']},
    shift:{type: String, enum: ['Morning', 'Afternoon', 'Night']},
    callWork:{type: String, enum: ['Yes', 'No']},
    nightShift:{type: String, enum: ['Yes', 'No']},
    refName: String,
    refOccupation: String,
    refPhone: String,
    refKnow: String,
    refemail: String,
    workExperince:{type: String, enum: ['Yes', 'No']},
    companyName: String,
    companyCountry: String,
    companyDate: Date,
    leaveJob: String,
    jobTitle: String,
    supervisorName: String,
    
});

// Creamos el Modelo 

const Applicant = mongoose.model('Applicant', applicantSchema);

// Obtenemos datos basicos metodo GET ALL
router.get('/applicants', (req, res) => {
    Applicant.find({}, (err, applicants) => {
        if (err) res.status(500).send(error)
        res.status(200).json(applicants);
    });
});



// Obtenemos nuestro API List
router.get('/', (req,res) => {
    res.send('API Works - API Funcionando');
});

module.exports = router;