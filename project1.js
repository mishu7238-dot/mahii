let fruits = ["apple","banana","mango"];
console.log(fruits[1])

let numbers = [1,2,3,4];

numbers.push(5);
numbers.shift();

console.log(numbers);


let colors = ["red","green","blue"];
for(let i=0; i< colors.length; i++){
    console.log(colors[i].toUpperCase());
}

function sumArray(arr){
    let sum=0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}
console.log(sumArray([1,2,3,4]));

let nums=[1,2,3,4,5,6];
let evens = nums.filter(n=> n% 2 === 0);
console.log(evens);

function largestNumber(arr){
    let largest = arr[0];
    for(let num of arr){
        if (num > largest){
        largest = num;
    }
}
return largest;
}
console.log(largestNumber([5,10,3,8]));

let a=[1,2];
let b=[3,4];

let combined = a.concat(b);

console.log(combined);



