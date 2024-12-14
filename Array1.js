const myarr =[0,1,2,3,4,5]
// console.log(myarr)

// delete myarr[1] // it will delete the given element from array but leave that postion empty it not effect on its length
// console.log(myarr.length)

// console.log(myarr.push(6))   // return a new length
// console.log(myarr)


// myarr.pop()           // if we console return a pop elemnet
// console.log(myarr)

// myarr.unshift(98)         // retun a new length
// console.log(myarr)

// console.log(myarr.shift())
// console.log(myarr)

// const myarr2 = myarr.join()  // it will convert into string 
// console.log(myarr2)

let myar1 = myarr.slice(1,4)  //** */ slice return a new array of sliced part and there is no change in original arrray  (IQ)
// console.log(myarr)
// console.log(myar1)


// console.log(`here it is original array: ${myarr}`)

// +++++++++++++++++++++++++++++++++++++++++++ Splice +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myar2 = myarr.splice(1,3) //** */ splice method return a new array but it will extract part from original array 
console.log(myarr)              //** */ it manipulate the original array, here changes occcur in original array
console.log(myar2)

console.log(`after splice : ${myarr}`)  
console.log(typeof myar2)               
console.log(typeof myarr)


//  array.splice(postion,deleteCount,AddingNewElement)
const Sarr = [10,11,12,13,14,15]
// Sarr.splice(2,3,114,115,116)  //** */ 3 value has been remove from 2nd position and new value added on that postion
// console.log(Sarr)  

let deletedvalue = Sarr.splice(2,3,114,115,116)
// console.log(deletedvalue)                       //** */ we can get deleted value in new array 


// *** to.Spliced method do not change original array it will return new array that contain spliced value *****
let new_splice= Sarr.toSpliced(2,1,114,115,116)
// console.log(new_splice)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const marvel_heros =['camerica','iron-man','black-widow','scarlet']
const dc_heros =['x-men','flash','speed','green-lantern']
const villains = ['jabuja','dormamu','thanos']

// marvel_heros.push(dc_heros) // push method add new array as array data type it not combine with existing array
// console.log(marvel_heros)

let assemble = marvel_heros.concat(dc_heros)  // it wil combine both array and return new array
// console.log(assemble)

let assemble2 = [...marvel_heros, ...dc_heros, ...villains]  // spread operator
// console.log(assemble2)

let war = marvel_heros.concat(dc_heros,villains)
// console.log(war)

let check = marvel_heros.includes('panther')  // it will check that the given value are present or not it will return booolean value
// console.log(check)

//console.log(Array.isArray('javascript')) // isArray method check whether it is array or not
//console.log(Array.from('javascript'))   // Array.from method convert into array

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3))  /// rerturn a new array from a set of elements

// console.log(myarr.toString())