const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


const app = express();

// Parseamos nuestra Data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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

// Creamos el Modelo Schema  de la BD
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
    state: {type:String, enum: ['Baja California', 'Other']},
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
module.exports = Applicant;

// Obtenemos todos los Aplicantes GET ALL
router.get('/applicants', (req, res) => {
    Applicant.find({}, (err, applicants) => {
        if (err) res.status(500).send(error)
        res.status(200).json(applicants);
    });
});

// Obetenmos los Aplicantes de Manera Indivudual

router.get('/applicants/:id', (req, res) => {
    Applicant.findById(req.params.id, (err, applicants) => {
        if(err) res.status(500).send(error)
        res.status(200).json(applicants);
        console.log(applicants)
    });
});


//Creamos el Applicante en la Base de Datos
router.post('/applicants', (req, res) => {
    
    var applicants = new Applicant();
        applicants.workbefore = req.body.workbefore;
        applicants.payrange = req.body.payrange;
        applicants.desposition = req.body.desposition;
        applicants.name = req.body.name;
        applicants.psourname = req.body.psourname;
        applicants.msourname = req.body.msourname;
        applicants.dob = req.body.dob;
        applicants.age = req.body.age;
        applicants.gender = req.body.gender;
        applicants.pofbirth = req.body.pofbirth;
        applicants.nationality = req.body.nationality;
        applicants.city = req.body.city ;
        applicants.state = req.body.satate;
        applicants.zipcode = req.body.zipcode;
        applicants.street = req.body.street;
        applicants.streetNumber = req.body.streetNumber;
        applicants.appartNumber = req.body.appartNumber;
        applicants.homePhone = req.body.homePhone;
        applicants.mobileNumber = req.body.mobileNumber;
        applicants.secondaryPhone = req.body.secondaryPhone;
        applicants.radio = req.body.radio;
        applicants.email = req.body.email;
        applicants.relation = req.body.relation;
        applicants.spouseName = req.body.spouseName;
        applicants.childrens = req.body.childrens;
        applicants.fatherName = req.body.fatherName;
        applicants.motherName = req.body.motherName;
        applicants.emergencyContact = req.body.emergencyContact;
        applicants.relationshipContact = req.body.relationshipContact;
        applicants.relcontactPhone = req.body.relcontactPhone;
        applicants.dependentYou = req.body.dependentYou;
        applicants.timeResident = req.body.timeResident;
        applicants.education = req.body.education;
        applicants.school = req.body.school;
        applicants.graduationDate = req.body.graduationDate;
        applicants.degree = req.body.degree;
        applicants.englishProficiency = req.body.englishProficiency;
        applicants.englishWriteLevel = req.body.englishWriteLevel;
        applicants.computerProficiency = req.body.computerProficiency;
        applicants.validVisa = req.body.validVisa;
        applicants.bodyTattos = req.body.bodyTattos;
        applicants.memberClub = req.body.memberClub;
        applicants.criminalRecord = req.body.criminalRecord;
        applicants.prisionMexico = req.body.prisionMexico;
        applicants.shift = req.body.shift;
        applicants.callWork = req.body.callWork;
        applicants.nightShift = req.body.nightShift;
        applicants.refName = req.body.refName;
        applicants.refOccupation = req.body.refOccupation;
        applicants.refPhone = req.body.refPhone;
        applicants.refKnow = req.body.refKnow;
        applicants.refEmail = req.body.refemail;
        applicants.workExperince = req.body.workExperince;
        applicants.companyName = req.body.companyName;
        applicants.companyCountry = req.body.companyCountry;
        applicants.companyDate = req.body.companyDate;
        applicants.leaveJob = req.body.leaveJob;
        applicants.jobTitle = req.body.jobTitle;
        applicants.supervisorName = req.body.supervisorName;  
       
      applicants.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'Applicant created successfully',     
            
        });
        console.log(req.body)
    });
});


// Obtenemos nuestro API List
router.get('/', (req,res) => {
    res.send('API Works - API Funcionando');
});

module.exports = router;