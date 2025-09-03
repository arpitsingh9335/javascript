//primitive datatypes
// 7 types: String,Number,Boolearn,null,undefined,Symbol,BigInt

const outsideTemp=null
let userEmail;

const id=Symbol("123")
const anotherid=Symbol("123")

console.log(id===anotherid);

//const bigNumber = 345687654335666


// Reference (Non Primitive)

// Array,object,Function

const heros =["shaktiman" ,"naagraj" ,"Ranapratap"];
let myObj={
    name:"Arpit",
    age:22,
}

const myFunction=function(){
    console.log("hello world");
}
function hello(){
    console.log("Arpit Singh");
    
}


console.log(typeof bigNumber);

myFunction();
hello();
console.log(typeof myFunction);
console.log(typeof hello);



