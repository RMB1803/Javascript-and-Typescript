function User(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, "email", {
        get: function() {
            return this._email.toUpperCase()
        },
        set: function(value) {
            this._email = value
        }
    })

    Object.defineProperty(this, "password", {
        get: function() {
            return this._password
        },
        set: function(value) {
            this._password = value
        }
    })
}

const ram = new User("ram@google.com", "12345")
console.log(ram.email);
console.log(ram.password);
