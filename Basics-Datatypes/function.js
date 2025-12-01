function sayMyName()
{
    console.log("A");
    console.log("B");
    console.log("C");
    console.log("D");
}

// sayMyName()

function addTwoNumber(num1,num2)
{
    // let result = num1 + num2
    // return result
    return num1+num2
}

// console.log(addTwoNumber(10,20))
let result = addTwoNumber(10,20)
// console.log(result);

// console.log(addTwoNumber);

function loginUserMessage(username="Fake User")
{
    console.log(`User is Login : ${username}`);
}

// loginUserMessage("abc")
// loginUserMessage()
// loginUserMessage("")

function calculateCartPrice(num1,num2,...num3)
{
    return num3
}

// console.log(calculateCartPrice(100,200,330,400,500));

const user = {
    username: "abc",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));