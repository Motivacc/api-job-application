const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDb URL 

const dbHost = 'mongodb://localhost/motiva';

//conectamos la BD

mongoose.connect(dbHost, function(err) {
    if(err){
        console.log('No nos podemos conectar a la BD')
    }else {
        console.log('Conexion Exitosa')
    }
});

// mongoose.connection.on("Error:", (err) => {
//     if(err){
//         console.log('No nos podemos Conectar a la BD')
//     }else {
//         console.log('Conexion Ok')
//     }
// });

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
    motherName: String,
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
    refEmail: String,
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

// Obtenemos todos los Aplicantes GET ALL
router.get('/applicants', (req, res) => {
    Applicant.find({}, (err, applicants) => {
        if (err) res.status(500).send(error)
        res.status(200).json(applicants);
    });
});

// Obetenmos los Aplicantes de Manera Indivudual

router.get('/applicants/:id', (req, res) => {
    Applicant.findById.apply(req.param.id, (err, applicants) => {
        if(err) res.status(500).send(error)
        res.status(200).json(applicants);
    });
});

//Creamos el Applicante en la Base de Datos
router.post('/applicants', (req, res) => {
   let applicantes = new Applicant({
        workbefore: req.body.workbefore,
        payrange: req.body.payrange,
        desposition:req.body.desposition,
        name: req.body.name,
        psourname: req.body.psourname,
        msourname: req.body.msourname,
        dob: req.body.dob,
        age: req.body.age,
        gender: req.body.gender,
        pofbirth: req.body.pofbirth,
        nationality: req.body.nationality,
        city: req.body.city ,
        satate: req.body.satate ,
        zipcode: req.body.zipcode ,
        street: req.body.street,
        streetNumber: req.body.streetNumber ,
        appartNumber: req.body.appartNumber,
        homePhone: req.body.homePhone,
        mobileNumber: req.body.mobileNumber ,
        secondaryPhone: req.body.secondaryPhone,
        radio: req.body.radio,
        email: req.body.email,
        relation: req.body.relation,
        spouseName: req.body.spouseName,
        childrens: req.body.childrens,
        fatherName: req.body.fatherName,
        motherName: req.body.mothernAME,
        emergencyContact: req.body.emergencyContact,
        relationshipContact: req.body.relationshipContact,
        relcontactPhone: req.body.relcontactPhone,
        dependentYou: req.body.dependentYou,
        timeResident: req.body.timeResident,
        education: req.body.education,
        school: req.body.school,
        graduationDate: req.body.graduationDate,
        degree: req.body.degree,
        englishProficiency: req.body.englishProficiency,
        englishWriteLevel: req.body.englishWriteLevel,
        computerProficiency: req.body.computerProficiency,
        validVisa: req.body.validVisa,
        bodyTattos: req.body.bodyTattos,
        memberClub: req.body.memberClub,
        criminalRecord: req.body.criminalRecord,
        prisionMexico: req.body.prisionMexico,
        shift: req.body.shift,
        callWork: req.body.callWork,
        nightShift: req.body.nightShift,
        refName: req.body.refName,
        refOccupation: req.body.refOccupation,
        refPhone: req.body.refPhone,
        refKnow: req.body.refKnow,
        refEmail: req.body.refemail,
        workExperince: req.body.workExperince,
        companyName: req.body.companyName,
        companyCountry: req.body.companyCountry,
        companyDate: req.body.companyDate,
        leaveJob: req.body.leaveJob,
        jobTitle: req.body.jobTitle,
        supervisorName: req.body.supervisorName, 
   }); 

    applicantes.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'User created successfully'
        });
    });
   
});

// Obtenemos nuestro API List
router.get('/', (req,res) => {
    res.send('API Works - API Funcionando');
});

module.exports = router;