class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`New course was added by ${this.username}`);
    }
}

const me = new Teacher("Ram", "ram@teacher.com", "12345")
me.logMe()

const masalaChai = new User("Masala Chai")
masalaChai.logMe()

console.log(me instanceof User); // true