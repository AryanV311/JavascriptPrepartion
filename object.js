// sigleton 
// object1.create()  // The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
//object literals

let object1 = {
    name:'javascript',
    age:20,
    "full name":'chai aur code',
    id:'2024abc'
}

// console.log(Object.entries(object1))

const me = Object.create(object1) // static method 

// console.log(object1.name)
// console.log(object1['age'])
// console.log(object1.fullname)   // we cant access doubled quoted full name with dot method
// console.log(object1['full name'])  // only can be acces by square bracket

// there is unique data type in object is a symbol
//first we have to declare a symbol

let mynum = Symbol('mynum')

let obj2 = {
    [mynum]:'key1',
    Email:'javascript2gmail.com',
    greeting:function(){
        console.log(`my email is ${this.Email}`)
    },
    upi_id:'java@syb'
}

// console.log(obj2.greeting())
// console.log(obj2.mynum)  // if we try to access mynum with dot method return undefined
// console.log(obj2['mynum'])  // by using square method also return undefined
// console.log(obj2[mynum])        // we can acces using square bracket without giving quotation
// console.log(typeof obj2[mynum])
// console.log(obj2)

// Object.freeze(obj2)            // after creating freeze method we cannot upadte existing data in object, 
obj2.Email = 'aryan@gmail.com'

// console.log(obj2.Email)         // it cannot update email


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++ if we want to block any specific data or single value in object   +++++++++++++++++++++++++++++++++++++++++++++++

Object.defineProperty(obj2,"upi_id",{               // it can only apply on given data, while in freeze all object keys are block
    Writable:false
})

obj2.upi_id='change@syb'
// console.log(obj2.upi_id)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  const c_obj = new Object()              // creating another bject with new keyword 

let c_obj = {}                              // creating an object with constructor

c_obj.password = "javascript123"
c_obj.userid=123
c_obj.email="script@gmail.com"

//  console.log(c_obj)
//  console.log(Object.keys(c_obj))
//  console.log(Object.values(c_obj))

 const x_obj1 = {1:'a', 2:'b'}
 const x_obj2 = {3:'c', 4:'d'}

 const obj3 = {x_obj1, x_obj2}
 //  console.log(obj3)

 const obj4 = Object.assign({},x_obj1, x_obj2)          // its better to give =>{} as a target and other are act as source
 console.log(obj4)

 const obj5 = {...x_obj1, ...x_obj2}
//  console.log(obj5)
 

//  console.log(Object.entries(x_obj1, x_obj2))     
//Each key-value pair is an array with two elements: the first element is the property key (which is always a string), and the second element is the property value. its like converting an array [[.,.],[.,.]]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*********************************************

// Object.fromEntries() is just of Object.entries, it convert an array into an object 
const arr =[
    ['name', 'aryan',],
    ['age','20'],
    ['roll no', '67']
]

const extract_obj = Object.fromEntries(arr)
// console.log(extract_obj)
