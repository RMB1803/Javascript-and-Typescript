const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// console.log(Math.PI); // constant value can't be changed

const chai = {
    name: "Ginger Tea",
    price: "250",
    isAvailable: true,

    orderChai: () => {
        console.log("Chai nahi bani");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false // now property name won't be iterated upon
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}