const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


function explainParseInt(value) {
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
  }
  
  // Example Usage for parseInt
  explainParseInt("42");
  explainParseInt("42px");
  explainParseInt("3.14");
  
  function explainParseFloat(value) {
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
  }
  
  // Example Usage for parseFloat
  explainParseFloat("3.14");
  explainParseFloat("42");
  explainParseFloat("42px");