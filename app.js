function writeName(){
    let vacationName = prompt("What's your favorite vacation spot?");
    document.write(vacationName);
}
function guessMyAge(){
    let userAge = prompt("What is my age?"); 
        if (userAge !== "49"){
            alert("wrong");
            guessMyAge();
        } else if (userAge==="49") {
            alert("right");
        } 
    
}
