const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
});

const CryptoModel = mongoose.model('Crypto', cryptoSchema);

module.exports = CryptoModel;
