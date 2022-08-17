console.log("start");

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("click-this").addEventListener("click", run);
});
function run() {

  let stock = document.getElementById('Stock').value;

stock = stock.toUpperCase();

          var url = 'https://financialmodelingprep.com/api/v3/quote-short/' + stock + '?apikey=2c338812fabec893abf6f7068f11decb';
          fetch(url)
        .then(response => response.json())
        .then(data => print(data));


  }
function print(data)
{
  let stockPrice = data[0].price;
  console.log(data);
  console.log(stockPrice);

  document.getElementById("PrtPrice").innerHTML = stockPrice;
}
