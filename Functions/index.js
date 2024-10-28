//alert("connected")

//function definition
function sayhello1 (){
    //this function prints hello to the conosle
   console.log("sayhello")
   //end sayhello function
}

//start the program execution
console.log("starting")

//call the fuction

/*let x= 5
let y= 20
let z= 10
showSum (10, 30, 1.5)
showSum( x, y, z)*/
let average =0


average = calcAvg(10, 15, 20)
console.log("avg is "+ average)

/*sayhello2("Sam")
console.log("done")
sayhello2("Henry")
console.log("again")*/

function sayhello2 (yourname){
    console.log("Hello " + yourname + "!")
}

//receivex three numbers and  display the sum in the console 
function showSum (num1, num2, num3){
    //calc  the sum of these numbers
    //let total = num1 + num2 + num3
    //console.log(`The sum is ${total} !`)
    console.log(`${num1} + ${num2} + ${num3} = ${total}` )
}

//function to calcand return avg  of 3 numbers
function calcAvg (num1, num2, num3) {
    let total = num1 + num2 + num3
    //calc avg
    let avg = total / 3
    //return the ans
    return avg

   // let total = num1/2 + num2/2 + num3/2
   // console.log(`The sum is ${total} !`)
   // console.log(`${num1/2} + ${num2/2} + ${num3/2} = ${total}`)
}
 
// JUST TRYING THEM OUT FOR BETTER UNDERSTANDING

function sayhello1 (){
    console.log ("Hello ")
}
console.log ("starting")
sayhello2("Sam")
sayhello1("Odusina")


function sayhello2 (yourname){
    console.log("Hello " + yourname)

}
function showsum (num1, num2, num3){
    let total = num1 + num2 + num3 
    console.log ("sum is " + total)
    console.log  (`${num1} + ${num2} + ${num3} = ${total}`)
}
showsum(10, 15, 2.5)

function avg (num1, num2, num3){
    let total = num1 + num2 + num3
    let avg = total / 3
    console.log ("avg is " + avg)

}

avg(4, 4, 6)

