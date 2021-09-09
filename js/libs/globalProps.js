class GlobalProps {
  constructor() {
    this.prices = this.initGetPrice();
  }
  async getProps() {
    return await this.props;
  }
  async getProp(key) {
    return (await this.props)[key];
  }
  async getMedian() {
    return await this.median;
  }
  async getFund(key) {
    return (await this.fund)[key];
  }
  async getHivePrice() {
    const median = await this.getMedian();
    return (
      parseFloat(median.base.replace(" USD", "")) /
      parseFloat(median.quote.replace(" DTC", ""))
    );
  }
  async initGetPrice() {
    return await getPricesAsync();
  }
  async getPrices() {
    let prices = await this.prices;
    var dtc2usd = prices["USD"].price;
    var dtc2btc = prices["BTC"].price;
    var dtc2eth = prices["ETH"].price;
    var dtc2eur = prices["EUR"].price;
    return {"USD": dtc2usd, "EUR": dtc2eur};
  }
}
