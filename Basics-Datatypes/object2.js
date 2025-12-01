// const user = new Object();

// console.log(user);
// console.log(typeof user);

const user = {}
user.name = "tirth"
user.age = 18
user.isLoggedIn = false

// console.log(user);

const ontherUser = {
    name:"Tirth",
    age : 18,
    purchaseItem : {
        tshirt:{
            quntity:2,
            price:199
        }    
    }
}

// console.log(ontherUser.purchaseItem.tshirt.price);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj4 = {obj1,obj2};
// console.log(obj4);

const obj4 = Object.assign({},obj1,obj2);
const obj3 = {...obj1, ...obj2};
// console.log(obj3);
// console.log(obj4);

// json data
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[0].id);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty("age"));
// console.log(user.hasOwnProperty("age2"));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// Array Of Object
[
    {},
    {},
    {}
]