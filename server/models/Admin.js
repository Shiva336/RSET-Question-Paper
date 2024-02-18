const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    password: {
        type: String,
        require: true,
    }, 
},
{ timestamps: true }
);

const admin = mongoose.model("Admin", adminSchema);
module.exports = admin;


