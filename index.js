import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_ASZPpRAP2LP1JJiCyZNFZXcHioUzMGTQQhyvwBpo"
);

const convertCurrency = async (fromCurrency, toCurrency, units) => {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });

  const multiplier = res?.data[toCurrency];

  return multiplier * units;
};


export { convertCurrency };
