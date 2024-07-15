






// problem 1 start




// function scopeTest() {
//     if (true) {
//       var varVariable = "I am var";
//       let letVariable = "I am let";
//       const constVariable = "I am const";
//     }
//     console.log(varVariable);
//     console.log(letVariable);
//     console.log(constVariable);
//   }
  
//   scopeTest();

//  can't show output because let and const Variables declared inside { }/ we know that the block scope variable can't access outsite of this scope. for this reson we can't output




// number of problem is 2


function greet(name, greeting = "Hello") {
  return `"${greeting}, ${name} !"`
}
console.log(greet("Alice"));
console.log(greet("Good mornign","Bob"));



// number of problem is 3

function sum(...argu){
  let total= 0
  for(let ar of argu){
    total +=ar
  }
  return total
}
console.log(sum(1,2,3));
console.log(sum(10,20,30, 40));
console.log(sum(5));







// number of problem is 4

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const margedArray = [...array1, ...array2, ...array3]
console.log(margedArray); 




// number of problem  is 5

const person={
  name:"John",
  age: 30,
  greet: function(){
    return `"Hi I'm ${this.name} and I'm ${this.age} years old"`
  }
}
console.log(person.greet());




// number of problem is 6

const fruits = ["apple", "banana", "cherry"]

for(let fruit of fruits){
  for (let eachElement of fruit){
    console.log(eachElement);
  }
}


// number of problem is 7

const name = "Alice";
const age = 25

const message = ` "My name is ${name} and I am ${age} years old"`
console.log(message);





// number of problem is 8

const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 92 }
];
for( let student of students){
  console.log(`Name : ${student.name}, grade: ${student.grade}`);
}






// number of problem is 9



const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


let total = 0
for( let numbers of nestedArrays){
  for(let num of numbers){
    total +=num
  
  }
}
console.log(total);







// number of problem is 10


const a = 5;
const b = 10;

// Your code here
const result = `"The sum of ${a} and ${b} is ${a+b}."`;
console.log(result);