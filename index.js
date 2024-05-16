let display = document.getElementById("display");

function displaya(input){
    display.value += input;
}


function cleardisplay(){
    display.value= "";
}


function calculate(){
    if(display.value === ""){
        alert("Error");
    }
    else{
        try{
            display.value = eval(display.value);
            }
            catch(error){
            display.value = "Error";
            }
}
}

function displayn(){
    alert("Undefined");
}