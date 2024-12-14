//? myfun()

//! we cannot access experssuon function before an intialization
// let myfun = function(){
//     console.log('first')
// }

//! ======  we cannot acces an arrow function before intialization 

// let myfun = () => {
//     console.log("arrow function")
// }

//! we can access regualr function before intialization
// function myfun() {
//     console.log('regular function')
// }

// //================================================================================================

// myfunc()

// var myfunc = function(){
//     console.log("first")
// }

// myfunc()

// function myfunc() {
//     console.log("second")
// }

// myfunc()

var x = 10;

function check(){
    console.log(x)

    var x = 23;
}

check()