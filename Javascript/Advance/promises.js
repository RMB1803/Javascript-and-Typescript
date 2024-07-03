const promiseOne = new Promise((resolve, reject) => {
    // Do an Async task

    setTimeout(() => {
        console.log('Async Task is complete');
        resolve()
    }, 1000);
})

promiseOne.then(() => {
    console.log("Promise consumed");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2");
        resolve()
    }, 2000);
}).then(() => {
    console.log("Async 2 resolved");
})

const PromiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Chai", email: "chai@example.com"})
    },3000)
})

PromiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username: "Ram", password: "12345"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 4000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Promise is either resolved or rejected");
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error) {
            resolve({username: "Javascript", password: "12345"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 5000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})