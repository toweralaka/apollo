const mongoose = require('mongoose');

const projectSchema = mongoose.model("Project", new mongoose.Schema(
    {
        "project_name": {
            type: String,
            required: true,
            unique: true
        },
        "project_id": {
            type: String,
            required: true,
            unique: true
        },
        "assigned_employee_id": {
            type: String,
            required: true
        },
        "details": {
            type: String,
            required: true
        }
    },
    {
        "timestamps": true
    }
));

module.exports = projectSchema;