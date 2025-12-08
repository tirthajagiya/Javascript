const user = {
    username: "tirth",
    price: 99,
    welcomeMessage: function () {
        console.log(`Welcome ${this.username}`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="abc"
// user.welcomeMessage()

// console.log(this);

// function greeting()
// {
//     let username = "abc"
//     console.log(this);
// }

// greeting()

// const greeting = function () {
//     let username = "abc"
//     console.log(this.username);
// }

// greeting()

// const greeting = () => {
//     let username = "abc"
//     console.log(this);
// }

// greeting()

// const addTwo = (n1,n2) => {
//     return n1+n2
// }

// console.log(addTwo(10,20));

// const addTwo = (n1,n2)=>n1+n2
// console.log(addTwo(10,20));

// const addTwo = (n1,n2)=>(n1+n2)
// console.log(addTwo(10,20));

const addTwo = (n1,n2)=>({username:"abc"})
console.log(addTwo(10,20));