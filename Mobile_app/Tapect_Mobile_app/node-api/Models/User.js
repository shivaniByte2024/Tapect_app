const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    organization_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    qrCodeString: { type: String, required: true },
    unique_Qr: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
