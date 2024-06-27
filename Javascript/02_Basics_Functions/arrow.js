const user = {
    username: "Ram",
    tech: "MERN",

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Phil"
// user.welcomeMessage();

// console.log(this);

function this_context() {
    let username = "Ram"
    console.log(this);
    //context only works in an object
    //this doesn't work with a function.
}

// this_context();

const chai = () => {
    let username = "Ram"
    console.log(this);
}

// chai()

// const addTwo = (n1, n2) => {
//     return n1 + n2
// }

// const addTwo = (n1, n2) => n1 + n2
         // OR
// const addTwo = (n1, n2) => (n1 + n2)

// how to return an object? By wrapping it in parenthesis
const addTwo = (n1, n2) => ({username: "Ram"})

// console.log(addTwo(3, 4))

