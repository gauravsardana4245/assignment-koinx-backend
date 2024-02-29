const CryptoModel = require('../models/cryptoModel');
const CoingeckoService = require('../services/coingeckoService');

const getAllCryptos =  async (req, res) => {
    try {
        const cryptos = await CryptoModel.find();
        return res.json(cryptos);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const createCryptos =  async (req, res) => {
    try {
        const cryptoList = await CoingeckoService.getAllCryptos();
        const insertedCryptos = await CryptoModel.insertMany(cryptoList);
        return res.status(200).json(insertedCryptos);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateCryptos = async () => {
    try {
        console.log("cryptos updating...");
        const cryptoList = await CoingeckoService.getAllCryptos();
        await CryptoModel.deleteMany({});
        await CryptoModel.insertMany(cryptoList);
        console.log('Cryptos updated successfully');
    } catch (error) {
        console.error('Error updating cryptos:', error);
     }
}

const getCompaniesHoldingCoin = async (req, res) => {
    try {
        const { currency } = req.body;

        if (currency !== "bitcoin" && currency !== "ethereum") {
            return res.status(400).json({success: false, message: "Currency not supported" });
        }

        const companies = await CoingeckoService.getCompaniesHoldingCoin(currency);
        return res.status(200).json({success: true, companies });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    getAllCryptos,
    updateCryptos,
    createCryptos,
    getCompaniesHoldingCoin
}
