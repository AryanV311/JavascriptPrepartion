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

