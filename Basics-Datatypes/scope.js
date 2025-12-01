const a = 1;
let b = 2;
var c = 3;

if(true)
{
    const x = 7;
    let y = 8;
    var z = 9;
    const c = 333;
    // console.log(c);
}

// console.log(a);
// console.log(b);
// console.log(c);
// // console.log(x);
// // console.log(y);
// console.log(z);

function one(){
    const username = "abc"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "abc"
    if (username === "abc") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

function addOne(num)
{
    // console.log(num+1);
    return num+1;
}

// console.log(addOne(50));

addTwo(5)
const addTwo = function(num){
    return num + 2
}