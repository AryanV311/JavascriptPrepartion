function check(username, lastname){
    this.username = username;
    this.lastname = lastname;
    // console.log(username)
    return this
}
// const check2 = check("aryan","vish")
// const check3 = check("akash","yadav")
// here we didnt print check3, but it override original value and print 
// we have to assign new keyword to get serparte instance of object
// console.log(check2)

// now we assigning new keyword 

const check2 = new check("javascript","chai")
const check3 = new check("code","cofee")
console.log(check2)
console.log(check3)  // nown we are getting separete instances 

const arr = [1,2,3,4,]

// console.log(arr.prototype)

