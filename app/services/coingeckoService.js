const axios = require('axios');

const CoingeckoService = {
    getAllCryptos: async () => {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
            const simplifiedCryptos = response.data.map(crypto => ({
                id: crypto.id,
                name: crypto.name
            }));
            return simplifiedCryptos;
        } catch (error) {
            throw error;
        }
    },

    getPriceOnDate: async (fromCurrency, toCurrency, date) => {
        try {

            const today = new Date();
            
            const myDate = date.split("-");
            var targetDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
            const targetTimestamp = targetDate.getTime();
            console.log(targetDate);

            const diffTime = Math.abs(today - targetDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            
            console.log("diffDays: ", diffDays)

            const url = `https://api.coingecko.com/api/v3/coins/${fromCurrency}/market_chart`;
            const params = {
                vs_currency: toCurrency.toLowerCase(), 
                days: diffDays,
                interval: 'daily',
                precision: 5,
            };
            const response = await axios.get(url, { params });
            const data = response.data;

            const priceData  = data.prices;
            const priceOfDay = priceData[0];
            const price = priceOfDay[1];
            console.log("price ", priceOfDay)
            return price;
        } catch (error) {
            console.log("error: ", error);
        }
    }, 

    getCompaniesHoldingCoin: async (currency) => {
        try {
            const response = await axios.get(`https://api.coingecko.com/api/v3/companies/public_treasury/${currency}`);
            const data =  response.data;
            const fetchedCompanies = data.companies;
            return fetchedCompanies;
        } catch (error) {
            console.log("error: ",error);
        }
    },
};

function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

module.exports = CoingeckoService;
