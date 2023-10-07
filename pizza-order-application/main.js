const form = document.querySelector('form')
// all inputs
const customer = document.querySelector('#name')
const size = document.querySelectorAll('[name="size"]')
const toppings = document.querySelectorAll('input[type="checkbox"]')
const delivery = document.querySelector('#delivery')
const order_price = document.querySelector('#price')

const pizzaOrder = () => {
  let customerName = customer.value
  let sizeResult = ''
  let toppingsResult = []
  let price = 0;
  let deliveryResult = delivery.options[delivery.selectedIndex].value


  size.forEach(item => {
    if (item.checked) {
      sizeResult = item.id
    }
  })

  switch (sizeResult) {
    case 'size2':
      price += 7.50;
      break;
    case 'size4':
      price += 10.50;
      break;
    case 'size6':
      price += 12.50;
      break;
    case 'size8':
      price += 15.50;
      break;
  };

  toppings.forEach(item => {
    if (item.checked) {
      toppingsResult.push(item.value)
    }
  })
  if (toppingsResult.length > 4) {
    price += (toppingsResult.length - 4) * 0.50
  }

  if (deliveryResult === "home") {
    price += 5
  }

  order_price.textContent = price.toFixed(2)
}

form.addEventListener('input', pizzaOrder)



//const userName = prompt('Please type in your name.');
//const data = document.querySelector('#name');
/*
const form = document.querySelector('form');
const customer = document.querySelector('#name');
const size = document.querySelectorAll('[name="size"]');
const toppings = document.querySelectorAll('input[type="checkbox"]');
const delivery = document.querySelector('#delivery').value;
const price = document.querySelector('#price');

const pizzaOrder = () => {
  let pizzaCustomerName = customer.value;
  let pizzaSize = "";
  let pizzaTopping = [];
  let totalPrice = 0;
  let deliveryOptionResult = delivery.options[delivery.selectedIndex].value;

  size.forEach((item) => {
    if (item.checked) {
      pizzaSize = item.id;
    }
  });

  switch (pizzaSize) {
    case "size2":
      price += 7.5;
      break;
    case "size4":
      price += 10.5;
      break;
    case "size6":
      price += 12.5;
      break;
    case "size8":
      price += 15.5;
      break;
  }

  toppings.forEach((item) => {
    if (item.checked) {
      pizzaTopping.push(item.value);
    }
  });

  if (pizzaTopping.length > 4) {
    totalPrice += (pizzaTopping.length - 4) * 0.50;
  }

  if (deliveryOptionResult === "home") {
    totalPrice += 5;
  }

  price.textContent = totalPrice.toFixed(2)
}

form.addEventListener('change', pizzaOrder);




let pizzaToppingPrice = 0;
if (pizzaTopping > 0) {
  pizzaToppingPrice = pizzaTopping * 0.5;
};

let deliveryOptionPrice = 0;
if (deliveryOption === deliveryOption) {
  deliveryOptionPrice = 5;
};
*/