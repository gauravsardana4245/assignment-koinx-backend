const express = require('express');
const PriceController = require('../controllers/priceController');

const router = express.Router();

router.post('/get-price-on-date', PriceController.getPriceOnDate);

module.exports = router;