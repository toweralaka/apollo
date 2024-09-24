const mongoose = require('mongoose');
let validator = require('validator');
// const { Schema } = mongoose;

// const userSchema = new Schema({})
const employeeSchema = mongoose.model("Employee", new mongoose.Schema(
    {
        "username": {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        "password": {
            type: String,
            required: true
            // validate: (value) => {
            // return validator.isEmail(value);
            // }
        },
        "name": {
            type: String,
            required: true
        },
        "employee_id": {
            type: String,
            required: true,
            unique: true
        },
        "department_id": {
            type: String,
            required: true
        }
    },
    {
        "timestamps": true
    }
));

// module.exports = mongoose.model("User", userSchema);
module.exports = employeeSchema;