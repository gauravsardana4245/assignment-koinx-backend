const express = require('express');
const router = express.Router();
const cryptoController = require('../controllers/cryptoController');

router.get('/get-all-cryptos', cryptoController.getAllCryptos);
router.post('/create-cryptos', cryptoController.createCryptos);
router.post('/get-companies-holding-coin', cryptoController.getCompaniesHoldingCoin);

module.exports = router;