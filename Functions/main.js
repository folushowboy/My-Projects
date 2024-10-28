document.getElementById("btn").onclick = check

function check(){
   // console.log ("check")
    //get the num from input box
    const number =parseInt (document.getElementById("num").value)
   // console.log( number ) 
    const answer = isEven(number)? "even" : "odd"
    console.log (answer)
    document.getElementById("ans").textContent = `${number} is ${answer}`

    }  

  //testing isEven
  console.log(isEven(10))
  console.log(isEven(15))

    function isEven(num){
        let remainder = num % 2
        console.log ("remainder is " + remainder)
        return (remainder == 0)
       /* if (remainder == 0){
            return true
        }
        else{
            return false
        }*/
    }