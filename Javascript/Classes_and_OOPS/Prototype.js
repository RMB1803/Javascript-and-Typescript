// let myName = "Ram     "

// console.log(myName.truelength);

let myHeroes = ["Thor", "Doctor Strange"]

let heroPower = {
    thor: "hammer",
    drStrange: "magic",

    getThorPower: function() {
        console.log(`Thor power is ${this.thor}`);
    }
}

Object.prototype.ram = function() {
    console.log("Ram is present in all objects");
}

Array.prototype.heyRam = function() {
    console.log("Ram says hello");
}

// heroPower.ram()

myHeroes.ram()
myHeroes.heyRam()
// heroPower.heyRam()

