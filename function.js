// function myfun(){
//     console.log('hello this is function')
// }

// myfun()         /* hello this is function*/
// const store = myfun()
// console.log(store)      // it will give undefined, because function cant return any value,

// function myfun2(num1, num2){
//     return num1 + num2 
//     console.log('hii')               /* in function after return we cannot print anything */
// }

// const store2 = myfun2(4,5)
// console.log(store2)             // now it will return the value 
// console.log(myfun2())           // NaN : without passing any argument

function myfun3(username){
    return `${username} just logged in `
}
// console.log(myfun3())            // it will return undefined
// myfun3(javascript)                  // it will not print when we console it, because for return value we have touse console 
// console.log(myfun3('jabvascript'))
// console.log(myfun3(''))                 // in this we pass an empty string, so it will return normal "just logged in"
// console.log(myfun3())               // in this we didnt pass any value, so it will reurn undefined and remaining sentences 



function calculatePrice(numm1,...num2){
    return `num1 :${numm1} and num2 is :${num2}`
}   

// console.log(calculatePrice(23))
// console.log(calculatePrice(23,34,24))
// console.log(calculatePrice(23,34,45,56))



//* this is a Block, not a Block scope -> it means what all variables and function we can acces in block:{} 
// {
//     var a =10;
//     let b=20;
//     const c = 20;
// }

//* let & const (TBZ)-> Temporal Dead Zone

//* TBZ -> since its let and const variable is hoisted and till it is initialize some value that between in that called Temporal Dead Zone
//* -> let & const is also Hoisted, becuase of temporal dead zone we can access before initializations
//* -> let & const are maintain in different storage, they are block scope

console.log(a); //! -> error will be cannot access before initialization it means it hoisted
console.log(x); //! -> error will be x is not defined, 

let a =10;

var b= 20;
