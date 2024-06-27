// FOR IN LOOP

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// For in loop doesn't work in Map because map is not iterable

// for (const key in map) {
//     console.log(key);
// }

// FOR EACH LOOP(used for arrays)
/* A callback function is passed as a parameter in foreach() */

// const coding = ["js", "ruby", "java", "python", "cpp"]

//foreach((value, index/number, array[]) => {})

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach((item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    // console.log(item.languageName)
})


const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    // console.log(item);
    return item
})

// console.log(values); // undefined

/* forEach() loop doesn't return anything */
