function SetUsername(username) {
    this.username = username
}

function createUser(username, email, password) {
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("Chai", "chai@facebook.com", "12345")
console.log(chai);