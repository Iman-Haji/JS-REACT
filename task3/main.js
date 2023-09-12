/* let temperature = parseInt(prompt('What is the temperature in celcius?'));

if (temperature <= 15) { 
  console.log('Wear a coat.')
} else {
  console.log('You don\'t need a coat.')
} */

/*let season = prompt('what is your favourite season?').toLowerCase();

console.log(season)

switch (season) {
  case 'spring':
    console.log('yay')
    break;
    case 'summer':
    console.log('so basic.')
    break;
    case 'autumn':
    console.log('me too.')
    break;
    case 'winter':
    console.log('erm...weirdo.')
    break;
    
  default: 
    break; 
    console.log('did you enter a season?')

} */

/*
const grade = 10;

if (grade > 10) {
  console.log('passing grade')
} else if (grade === 10 ) {
  console.log('passing on the limit')
} else {
  console.log('failing. grade')
}
*/

/*
const number1 = parseInt(prompt('Type a random number, please.'));
const number2 = parseInt(prompt('Type a second random number, please.'));
const number3 = parseInt(prompt('Type a third random number, please. '));
let sum;

if (number1 || number2 || number3 < 0){
  sum = number1 + number2 + number3
  console.log('jhj' + sum)
} else (number1 || number2 || number3 <0); {
  console.log('hi')
}
*/

/*

const randomNumbers = () => {

  const num1 = Number (prompt('give me the first number, please.'))
  const num2 = Number (prompt('give me the second number, please.'))
  const num3 = Number (prompt('give me the third number, please.'))

const mult = num1 * num2 * num3;
const sum = num1 + num2 + num3;

if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
  console.log('sum is: ', sum, ' and multiplication is ', mult)
} else if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
  console.log(`sum is ${sum}`)
} else {
  console.log('all negative.')
}

}
randomNumbers()



numb1 => 0 && % 2


const randomNumber = () => {


randomNumber()
}

*/

const numb1 = Number(prompt('give me one number, please.'))

if (numb1 % 2 == 0) {
  console.log('number ', numb1, ' is even.')
} else if (numb1 % 2 == 1) {
  console.log('number ', numb1, ' is odd.')
} else () => {
  console.log('please enter a positive number')
}