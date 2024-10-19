//alert("connected!");
//console.log("Hello World");
//attach an event listener to this button 
document.getElementById("hello").onclick = sayHello;

//create function
function sayHello(){
    //console.log("hello");\


    //get the name from the textbox
    let yourname = document.getElementById("yourname").value;
    console.log("yourname is " + yourname);

    
    //display hello in h2
    document.getElementById("msg").textContent = "Hello " + yourname + "!";


    //get the age from  the textbox
    let yourage=document.getElementById("yourage").value;
    console.log("Age is " + yourage);
    console.log("type is " + typeof(yourage));
    document.getElementById("age").textContent= yourage + "!";
    
    //change to number
    yourage=parseInt(yourage);

    //calc age in 10years
    let age10=yourage + 10;
    console.log("age10 is " + age10);

    //display age in 10years
    document.getElementById("age").textContent= "your age in 10years will be " + age10

} //end of the sayhhello function