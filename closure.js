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
