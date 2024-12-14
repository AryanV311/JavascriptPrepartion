//constructor

// class user {
//     constructor(username, email, pass){
//         this.username = username;
//         this.email = email;
//         this.pass = pass;
//     }

//     encryptedpass(){
//         return `${this.pass} abcd`
//     }

//      changUsername (){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("javascript","js@gamil.com",786)
// console.log(chai.encryptedpass())



// const tea = new user("chaiCode","chai@gmail.com", 877)
// console.log(tea.changUsername())

// function smartUser(Username,email,pwd){
//     this.Username = Username
//     this.email = email
//     this.pwd = pwd
// }

// smartUser.prototype.enhancePass = function(){               // created prototype enhance
//     return `pass enhance to: ${this.pwd}xyzab`
// }

// smartUser.prototype.cahngUsername = function(){
//     return `change to upperCase: ${this.Username.toUpperCase()}`
// }

// // now tis protype use as method 

// const coffee = new smartUser("cofee","cofee@gamil.com",7665)            // witout new keyword, prototype cannot be guess by any function
// console.log(coffee.enhancePass())

// const coding = new smartUser("coder","coder@gamil,com",55443)
// console.log(coding.cahngUsername())

// +++++++++++++++++++++++++ Prototype 

const heros =["ironMan","captainAmerca","hulk"]

const myHero = {
    name:"LordKrishna",
    number:1,
    power: "unknown",
    greeting : function(){
        console.log(`lordKrshna pwer is ${this.power}`)
    }
}
// console.log(myHero.greeting())

// +++++++ now creating a prototype for object

Object.prototype.Worship = function(){
    return `worship to god give piece`
}

// console.log(myHero.Worship())
// console.log(heros.Worship())

// => here object prototype can be used in object as well as on Array

// ======== lets check Array prototype can wrok on object

Array.prototype.AssembleAvenger = function(){
    return `Avenger Assemble 3`
}

// console.log(heros.AssembleAvenger())
// console.log(myHero.AssembleAvenger())  // here Array prtotype is not work on object


// +++++++++++++++++++++ let create string methods 

const Name = "javascript      "
// console.log(Name.length)
// console.log(Name.trim().length)

//+++QQQQQQQ1 lets create trueLength method taht dirctle return true length of string that have extra spaces

String.prototype.truelength = function(){
    console.log(this)
     console.log(` true length is ${this.trim().length}`)
}
Name.truelength()

"Aryan".truelength()