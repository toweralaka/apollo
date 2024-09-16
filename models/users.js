const mongoose = require('mongoose');
// const { Schema } = mongoose;

const userSchema = mongoose.model("User", new mongoose.Schema(
    {
        "username": {
            type: String,
            required: true
        },
        "password": {
            type: String,
            required: true
        }
    },
    {
        "timestamps": true
    }
));

// module.exports = mongoose.model("User", userSchema);
module.exports = userSchema;