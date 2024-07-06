// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc123`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Chai", "chai@google.com", "12345")
// console.log(chai.changeUsername());
// console.log(chai.encryptPassword());

// Behind the Scene

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc123`
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const tea = new User("Tea", "Tea@google.com", "1234567")
console.log(tea.changeUsername());
console.log(tea.encryptPassword());