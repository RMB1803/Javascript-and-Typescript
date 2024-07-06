class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME: ${this.username}`);
    }

    static createID() {
        return `123`
    }
}

const ram = new User("ram")
// console.log(ram.createID());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iPhone", "iPhone@apple.com")
// console.log(iPhone.createID())