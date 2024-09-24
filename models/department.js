const mongoose = require('mongoose');

const departmentSchema = mongoose.model("Department", new mongoose.Schema(
    {
        "name": {
            type: String,
            unique: true,
            required: true
        },
        "department_id": {
            type: String,
            unique: true,
            required: true
        }
    },
    {
        "timestamps": true
    }
));

module.exports = departmentSchema;