//primitive datatypes
// 7 types: String,Number,Boolearn,null,undefined,Symbol,BigInt



//const bigNumber = 345687654335666


// Reference (Non Primitive)

// Array,object,Function

// const heros =["shaktiman" ,"naagraj" ,"Ranapratap"];
// let myObj={
//     name:"Arpit",
//     age:22,
// }
// console.log(myObj.name)
// console.log(heros[2]);


// const myFunction=function(){
//     console.log("hello world");
// }
// function hello(){
//     console.log("Arpit Singh");
    
// }


// console.log(typeof bigNumber);

// myFunction();
// hello();
// console.log(typeof myFunction);
// console.log(typeof hello);

//-----------------------------------------------//

//Stack (Primitive), Heap (Non-Primitive)

// let myName="Arpit Singh"

// let anotherName="shubham"
// anotherName="monu"
// console.log(anotherName);


let username={
    email:"arpit@gmail.com",
    upi:"user@ybl"
}

let user=username
user.email="singh@gmail.com"

console.log(username.email);

console.log(user.email);



