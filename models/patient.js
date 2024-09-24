const mongoose = require('mongoose');

const patientSchema = mongoose.model("Patient", new mongoose.Schema(
    {
        "username": {
            type: String,
            unique: true,
            lowercase: true,
            required: true
        },
        "password": {
            type: String,
            required: true
        },
        "name": {
            type: String,
            required: true
        },
        "patient_id": {
            type: String,
            unique: true,
            required: true
        },
        "assigned_employee_id": {
            type: String,
            required: true
        }
    },
    {
        "timestamps": true
    }
));
patientSchema.collection.createIndex(
    { 
        username: 1 ,
        patient_id: 1
    },
    { unique: true, collation: { locale: 'en', strength: 2 } }
);

module.exports = patientSchema;