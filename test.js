// let obj = {num : 1};

// let addToObject = function(a, b, c) {
//     return this.num + a + b + c;
// }

// console.log(addToObject.call(obj, 2, 3, 4));

// let arr = [1 ,2, 3];
// console.log(addToObject.apply(obj, arr));

// let bound = addToObject.bind(obj);
// console.log(bound.this)
// console.log(bound(1,2,3));

// let obj1 = { a : 1, 
//     b : 2, 
//     foo() {
//         return this.a + this.b;
//     }
// }

// let obj2 = { a : 3, b : 4};

// let borrowFunc = obj1.foo.bind(obj2);
// borrowFunc();

// Write a function and use 'call' to call the function
// Write a program using apply
// Write a program using bind
// Create a new object called Student with age 20 , write a function which prints the age of the student 
// from the student object.
// Dont pass in args. Read from 'this' and use BIND

let obj = {
    a : 1,
    b : 2,
}

let obj2 = {
    print() {
        console.log("using bind");
    }
}

function Sum(c, d) {
    return this.a + this.b + c + d;
}

console.log(Sum.call(obj, 3, 4));

console.log(Sum.apply(obj, [3, 4]));

let bindFunc = obj2.print.bind(obj);
bindFunc();

let Student = {
    age : 20,
}

function printAge() {
    console.log(this.age);
}


let printAgeBind = printAge.bind(Student);
printAgeBind();

function multiply(a, b) {
    return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(3));

let multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(3));

function multiplyUsingClosures(a) {
    return function(b) {
        return a * b;
    }
}

console.log(multiplyUsingClosures(2)(5));
