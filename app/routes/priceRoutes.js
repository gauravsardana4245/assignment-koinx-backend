const express = require('express');
const PriceController = require('../controllers/priceController');

const router = express.Router();

router.post('/get-relative-price-on-date', PriceController.getRelativePriceOnDate);

module.exports = router;