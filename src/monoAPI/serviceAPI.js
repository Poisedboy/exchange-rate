import axios from 'axios';

export const ServiceAPI = () => {

    const codeToName = (code) => {
        switch (code) {
            case 980:
                return 'UAH';
            case 840:
                return 'USD';
            case 985:
                return 'PLN';
            case 978:
                return 'EUR';
            case 826:
                return 'GBP';
            case 124:
                return 'CAD';
            case 203:
                return 'CZK';
            default:
                return undefined;
        };
    };

    const filteredArrayCurrencies = (array) => {
        return array.filter(money => money.currencyCodeB === 980)
            .filter(good => good.currencyCodeA === 840 ||
                good.currencyCodeA === 978 ||
                good.currencyCodeA === 826 ||
                good.currencyCodeA === 985 ||
                good.currencyCodeA === 124 ||
                good.currencyCodeA === 203);
    };
    
    const requestData = async () => {
        try {
            const response = await axios.get(
                'https://api.monobank.ua/bank/currency'
            );
            const filteredCurrencies = filteredArrayCurrencies(response.data);
            const currencies = filteredCurrencies.map(currency => {
                return {
                    firstCurrency: codeToName(currency.currencyCodeA),
                    secondCurrency: codeToName(currency.currencyCodeB),
                    date: currency.date,
                    rateSell: currency.rateSell | 'Not available',
                    rateBuy: currency.rateBuy | 'Not available'
                };
            });
            return currencies;
        } catch (e) {
            console.log('Error API: ', e);
        }
    }
    return { requestData };
};
