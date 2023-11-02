console.log("hello world!")

//prompt
//alert

//alert("Hello World!")

//button query selector
document.querySelector("#myButton")
//find element by id
//find elements by class

//add event listener
myButton.addEventListener("CLICK ME",myClick);

function myClick(){
//console.log("Clicking");
//console.log(myNmame);
//alert("Hello "+myName +"!")

//What is Strings
//"aisdifijifjirifiirf"
//"sdfuhishfisifisifhisf"
//37937643846721934
let name=prompt("What is your name?")

alert{'Hello $(myNmame)!'}
const weather= prompt('How is the weather today');

let myImage=document.querySelector("weatherImage");
//Run condition to check what I wrote in the "weather" prompt

//if(weather)==="sunny"||weather==="Sunny"||weather==="SUNNY")
//.toLowerCause()

if(weather==="sunny"||weather==="Sunny"||weather==="SUNNY") {
    myImage.src="";
}else{
    myImage.src="";
}

}

//changed -> cannot use const
//let sum =100;
//sum=sum + 10
//console.log("sum:",sum)

//Conditions
if(weight>80) {
    loseweight()
}else if(weight <50) {
    eatMore()
}else{
    nothing()
}

