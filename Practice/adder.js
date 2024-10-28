//wirte the function to execiute when the + sign us clicked
function add(){
    console.log("= clicked")
    const num1=parseInt(document.getElementById("num1").value)
    console.log("num1 is " + num1)
    const num2=parseInt(document.getElementById("num2").value)
    console.log("num2 is " + num2)
    console.log( "type is" + typeof(num1))

    //validate that the input is good
    if(isNaN (num1) || isNaN(num2)){
        //bad input error msg
        alert("input must be two numbers")
    }

    else{
    //good input process it
//calculate the sum
    const sum=(num1+num2)
    console.log("sum is " + sum)

    //display your answer
    document.getElementById("sum").innerText= sum + "!"
    }

}


//write function for clear
     function reset(){
        document.getElementById("num1").value= ""
        document.getElementById("num2").value= ""
        document.getElementById("sum").innerText= ""
     }
