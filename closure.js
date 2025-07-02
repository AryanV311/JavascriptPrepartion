// function myfunction1(){
//     let name = 'aryan'

//     function inner(){
//         let name2 = 'king'
//         console.log(name)
//     }

//     // console.log(name2)
//     inner()
// }

// myfunction1()


function secretHolder(){
  let secret = 'Aryan treasure map'
  
  return {
    getSecret(){
      return secret;
    },
    
    setSecret(newSecret){
      secret = newSecret;
    }
  }
}

const mySecret = secretHolder()
console.log(mySecret.getSecret())

mySecret.setSecret('New Map Found')

console.log(mySecret.getSecret())


for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i); // ??
  }, i * 1000);
}
// 4, 4, 4

// closure use to solve scope prbolem
for(var i=1; i<=3; i++){
  (function(j){
    setTimeout(function() {
    console.log(j)
  }, j *1000);
  })(i)
}
//1, 2, 3
