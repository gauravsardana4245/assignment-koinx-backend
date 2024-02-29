const CoingeckoService = require('../services/coingeckoService');


const getPriceOnDate =  async (req, res) => {
    try {
        const { fromCurrency, toCurrency, date } = req.body;
        const price1inINR = await CoingeckoService.getPriceOnDate(fromCurrency, "inr", date);
        const price2inINR = await CoingeckoService.getPriceOnDate(toCurrency, "inr", date);
        const valueOfFromCurrencyInToCurrency = price1inINR / price2inINR;
        const precisedValue = (Number)(valueOfFromCurrencyInToCurrency.toPrecision(5));
        return res.status(200).json({ value: precisedValue });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    getPriceOnDate
};
