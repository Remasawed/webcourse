let sizeRadios = document.getElementsByName('size');
let sizePrice = 0;

for (let radio of sizeRadios) {
  if (radio.checked) {
    sizePrice = parseFloat(radio.value);
    break;
  }
}
let toppings = document.querySelectorAll('input[type="checkbox"]:checked');
let toppingsPrice = toppings.length * 2;
let total = sizePrice + toppingsPrice;
document.getElementById('total').textContent = "Total: $" + total;
<p id="total">Total: $19</p>
