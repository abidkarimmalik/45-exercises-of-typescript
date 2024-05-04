

// **Tests for equality and inequality with strings
   let apple = "apple"
   
   console.log(apple=="apple" ),
   console.log(apple != "apple");

// Test after converting to LowerCase

   let uppercaseapple="APPLE"
console.log(uppercaseapple.toLowerCase()== "apple");

// numerical test using equal to and not equal to
let five=5
let ten=10
console.log("is five is equal to 5");
console.log(five==5);

console.log("is five is equal to 10");
console.log(five==10);

console.log("is five is not equal to 10");
console.log(five!=10);

// numerical test using less than and greater than
console.log("is five is greater than 10");
console.log(five>10);

console.log("is five is less than 10");
console.log(five<10);

// numerical test using less than and equal to and greater than and equal to
console.log("is five is less or equal to 10");
console.log(five<=10);

console.log("is five is greater than or equal to 10");
console.log(five>=10);

console.log("is five is less than or equal to 10");
console.log(five<=10);

// Tests using "&" and "or" operators
console.log("is 5 is not equal to 10 and is 5 is less than 10");
console.log( five!=10 && 5<10);

console.log("is five is not equal to 10 and is five is greater than 10");
console.log(five!=10 && 5>10);

console.log("is five is not equal to 10 and is five is less than 10");
console.log(five!=10 && 5<10);

console.log("is five is  equal to 10 or  is five is less than 10");
console.log(five==10 || five<10);

console.log("is five is  equal to 10 or  is five is greater than 10");
console.log(five==10 || five>10);

// tests using array
let animals=["cow","buffalow","lion","tiger"];

// test whether item is in array
console.log("is cow includes in  array");
console.log(animals.includes("cow"));

console.log("is monkey includes in  array");
console.log(animals.includes("monkey"));
 
// not include

console.log("is monkey not includes in  array");
console.log(!animals.includes("monkey"));








   














