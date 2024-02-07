const user = {
    username: "Saurabh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

let newUser={
    username:"Roshan",
    price:99,
    welcomeMessage:function() {
     console.log(`Hi ${this.username}, Welcome to Udtechs`);
    }
}

// newUser.welcomeMessage()
// newUser.username="Pandey"
// newUser.welcomeMessage()

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Saurabh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Saurabh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Saurabh"
    console.log(this);
}


chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Saurabh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()