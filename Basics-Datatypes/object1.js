//singleton Object
// Object.create

// object instance
const mySym = Symbol("myOwnSymbol")
const myObj = {
    name:"Tirth",
    "full name":"Tirth Ajagiya",
    [mySym] : "Hey from Object Symbol",
    age:18,
    isLoggedIn:false,
    lastLoggedInDays:["Sunday","Monday"]
}

// console.log(myObj);
// console.log(typeof myObj);
// console.log(myObj.name);
// console.log(myObj["full name"]);
// console.log(myObj.mySym);
// console.log(myObj[mySym]);

myObj.age = 20
// console.log(myObj.age);
// Object.freeze(myObj);
myObj.age = 22
// console.log(myObj.age);

myObj.hey = function()
{
    console.log("Hey !");
}

myObj.hello = function()
{
    console.log(`Hello ${this.name}`);
}

// console.log(myObj.hey());
// console.log(myObj.hello());

myObj.hey();
myObj.hello();

console.log(myObj.hello);