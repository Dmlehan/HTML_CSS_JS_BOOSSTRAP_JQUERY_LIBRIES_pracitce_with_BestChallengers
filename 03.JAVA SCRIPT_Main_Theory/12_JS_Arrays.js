// Literal Arrays
let array1=[];
let array1=[1,2,3.4,5];
console.log(array1);

let array1=[1,"Hello",true,function(){},["A","B","C"]];
console.log(array1);

// constructor Based

let array2=new Array();
let array2=new Array(1,2,3,4,5);
console.log(array2);
let array3=new Array(1,2,3,4,5,6);
console.log(array3);

// array2

array2=new Array(1,"hello",true,function(){},["hi","Lehan"],{});
console.log(array2);

let array3=new  ["A","B","C","D","E","F"];
// // get array item by index
// console.log("index0: ", array3[0]);
// console.log("index1: ", array3[1]);
// console.log("index2: ", array3[2]);
// console.log("index3: ", array3[3]);
// console.log("index4: ", array3[4]);
// console.log("index5: ", array3[5]);

console.log("array3:",array3);
//// update array item in js
array3[3]="Hello";
console.log("array3" , array3);


