//alert("connected");
document.getElementById("calc").onclick= enter;

function enter(){
    //get miles from the text box and store as decimal
    const miles=parseFloat(document.getElementById("miles").value);
    console.log("miles is " + miles);
    console.log("type is " + typeof(miles));

    //get gallons as text box and store a decimal
    const gallons=parseFloat(document.getElementById("gallons").value);
    console.log("gallons is " + gallons);

    //make sure input is valid
if (isNaN (miles) || isNaN(gallons)){
       // alert("missing or invalid input")
        document.getElementById("mpg").textContent = "missing or invalid data"
    }

else{

   

    //calc mpg
    const mpg= miles/gallons; 
    console.log("mpg is " + mpg);
   

    //display the result the webpage
     document.getElementById("mpg").textContent= mpg.toFixed(2) + " miles per gallons";
 }
}  