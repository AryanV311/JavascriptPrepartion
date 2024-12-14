// console.log(this)

function chai() {
   let username = "aakash"
    console.log(this.username)
}

// chai()

const tea = function(){
    let username = 'aryan'
    console.log(this.username)
    console.log(this)
}

// tea()

const coffe = () => {
    console.log(this)
}

// coffe()    // in arrow function we get empty object

let arr = [1,2,3,4,5]

// let obj = {...arr}
// console.log(obj)

for (let i in arr){
    // console.log(i)
}

// for (let i of arr){
//     console.log(i)
// }

// arr.foo = "hii";

// console.log(arr)

console.log('your age is:', age)
let age = 23
console.log('your age is :', age)