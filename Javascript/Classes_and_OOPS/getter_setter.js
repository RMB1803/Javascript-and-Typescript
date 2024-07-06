class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}ram`
    }
    set password(value) {
        this._password = value
    }
}

const ram = new User("me@google.com", "abcde")
console.log(ram.email);