let myName = prompt("What is your name?");

let myButton = document.querySelector("#myButton");

myButton.addEventListener("click", myClick);

function myClick() {
    if ( myName === null || myName === "") {
        myName = "Visitor";
    }

    alert(`Hello ${myName}!`);

    const weather = prompt(`How is the weather today`);

    let myImage = document.querySelector(".WeatherImage");

    if (weather === null) {
        return;
    }

    if ( weather.toLowerCase() === "sunny" ) {
        myImage.src = "sunny.gif";
    } else if ( weather.toLowerCase() === "rainy" ) {
        myImage.src = "rainy.gif";
    } else {
        alert(`Please input a correct weather name`);
    }
}

