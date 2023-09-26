//const userName = prompt('Please type in your name.');
//const data = document.querySelector('#name');

const form = document.querySelector('form');
const pizzaCustomer = document.querySelector('#name');
const pizzaTopping = document.querySelectorAll('#checkbox');
const orderPrice = document.querySelector('orderPrice');
const sizing = document.querySelectorAll('[name="size"]');
const deliveryOption = document.querySelector('#deliveryOption').value;

const orderPizza = () => {
  let pizzaCustomer = pizzaCustomer.value;
  let orderPrice = 0;
  let pizzaSize = ' '
  let pizzaTopping = [];
  let deliveryOption = deliveryOption.options[deliveryOption.selectedIndex].value;
}

sizing.forEach(item => {
  if (item.checked) {
    pizzaSize = item.id
  }
})

let pizzaToppingPrice = 0;
if (pizzaTopping > 0) {
  pizzaToppingPrice = pizzaTopping * 0.5;
}

let deliveryOptionPrice = 0;
if (deliveryOption === deliveryOption) {
  deliveryOptionPrice = 5;
}
