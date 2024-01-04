// js functions
// in js functions are very special bc they are treated as first class objects or citizen
// in js,functions can be stored in variable,can be passed as an argument to other function and also can be returned from a function body
// normal function
// function fun(para1,para2)
// {

// }
// fun(arg1,arg2)
//anonymous fun: functional expression
// let fun=function (){
//  let a=10;
//  console.log(10);
//  return a;
// }
// console.log(fun,"what is inside variable");
// console.log(fun(),"calling function");
 // undefined is not an error
// it is special type of keyword/placeholder it tells about the current var is not exist 
// arrow function: functional expression
// let fun = (para1,para2)=>{
// //fun body
// }
// fun();
// IIFE:immediatetly invoked functional expession
// ((a,b)=>{
//     let c=a+b;
//     console.log(c,"output from IIFE");
// })(2,3)
// ea6: ecmascript v6; arrow function,IIFE,let and const
// function fun(...a){
// console.log(a," this are all the arguments coming in parameters");
// }
// fun(2,3,4,5,6,3)
// function addition(a,b)
// {
//     let c=a+b;
//     return c;
// }
// function calc(a,b,add){
//     return add(a,b)
// }
// console.log(calc(2,3,addition,"suation fun working inside calc fun"));