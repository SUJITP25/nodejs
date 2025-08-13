// Javascript is synchronous, blocking and single-theraded language.
// To make aync programming possible, we need the help of libuv.


// Asyncronous Code Execution
// memory heap - All declared variables and functions resides here. 
// callstack - Whenever we execure code, functions are pushed into the call stack.
// Execution is done in LIFO manner, lastInFirstOut, stack Data Structure. 
// fs.readFile() - async function handle by libuv by native async mechaism, Thread pool.


// import fs from "fs"
// console.log("first")
// fs.readFile('data.txt',()=>{
//     console.log("Second")
// })
// console.log("third")
// first,third and then second will be executed.



// Synchronous Code Execution
// Call Stack- global()
// console.log("first")
// console.log("second")
// console.log("third")
// First, second and third will be print on console.
// After execution done then global() function will also be removed from stack. 
// 


