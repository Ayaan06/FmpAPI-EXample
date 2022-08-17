
      function newPriceFunction(){


        var url = 'https://financialmodelingprep.com/api/v3/quote-short/' + stock + '?apikey=2c338812fabec893abf6f7068f11decb';
        fetch(url)
      .then(response => response.json())
      .then(data => drawOutput(data));
      let stockPrice = data[0].price;
      console.log(data);
      console.log(stockPrice);

}
