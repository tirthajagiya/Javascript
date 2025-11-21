const arr1 = [10,20,30]
const arr2 = [40,20,50]

// arr1.push(arr2);
console.log(arr1);
// console.log(arr1[3][1]);

console.log(arr1.concat(arr2));
console.log([...arr1,...arr2]);

const myArr = [1,2,[4,5,6],7,[8,9,[10,11]],12];
console.log(myArr.flat(2));
console.log(myArr.flat(Infinity));