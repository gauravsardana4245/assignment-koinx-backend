const express = require('express');
const connectDB = require('./config/db');
const CryptoModel = require('./app/models/cryptoModel');
const cryptoController = require('./app/controllers/cryptoController.js');
const priceRoutes = require('./app/routes/priceRoutes.js');
const cryptoRoutes = require('./app/routes/cryptoRoutes.js');
const cron = require('node-cron');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use('/api/crypto', cryptoRoutes);
app.use('/api/price', priceRoutes);

//Background job for updating cryptos every hour
cron.schedule('0 * * * *', cryptoController.updateCryptos);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});