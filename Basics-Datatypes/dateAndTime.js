let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23);
myCreatedDate = new Date(2023,0,23,5,3);
myCreatedDate = new Date("2023-01-14");
myCreatedDate = new Date("01-14-2023");

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myTimeStamp.getTime);

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.toLocaleString(
    'default',{
        weekday:'long',
    }
));