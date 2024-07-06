const user = {
    username: "Ram",
    loginCount: 8,
    signedIn: true,

    getUserDetails: () => {
        console.log("Got details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}


// console.log(user.username);
// console.log(user.getUserDetails())
// console.log(this) ->{}

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = () => {
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("Ram", 11, true)
const userTwo = new User("Mohan", 8, true)

console.log(userOne.constructor); // [Function: User]
// console.log(userTwo);

/*
 * new keyword creates an empty object called an instance.

 * Constructor function gets called because of new, which returns all the arguments we give to the new object.

 * Everything gets injected into 'this' keyword. 

 * everything is returned to us.
*/
