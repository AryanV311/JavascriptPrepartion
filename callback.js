/* A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished */

function display(myMessage){
    console.log(`here is my messege ${myMessage}`);
}

function firstMessage(){
    display("heyyyyy!");
}

function secondMessage(){
    display("hmmmmmmm");
}

// firstMessage();
// secondMessage();
// firstMessage();

// +++++++++++++++++++++++++++++++++++

// function displaySum(sum){
//     console.log(`your Answer is : ${sum}`)
// }

// function calculator(a,b){
//     let add = a + b;
//     return add;
//     displaySum(add);
// }

// calculator(3,6)

// now using callback function to perform calculation

// function displaySum(sum){
//     console.log(`your Answer is : ${sum}`)
// }

// function calculator(x , y, myCallback){
//     let add = x + y;
//     myCallback(add);
// }

// calculator(5,6, displaySum);

function getdata(dataId, getNextdata){
    setTimeout( ()=> {
        console.log("data",dataId);
        if(getNextdata){
            getNextdata();
        }
    }, 2000);
}

getdata(2, () => {
    getdata(3, ()=> {
        getdata(4, ()=>{
            getdata(5);
        })
    })
})