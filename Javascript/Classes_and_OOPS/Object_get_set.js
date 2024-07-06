const User = {
    _email: "ram@google.com",
    _password: "12345",

    get email() {
        return this._email
    },
    set email(value) {
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);