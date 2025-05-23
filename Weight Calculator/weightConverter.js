const input = document.getElementById("pounds")
const error = document.getElementById("error")
const result = document.getElementById("result")


let errorTime;
let resultTime;

function updateResults(){
    if(input.value <= 0 || isNaN(input.value)) {
        error.innerText = "Please enter a valid number!"

        clearTimeout(errorTime);

        setTimeout(() => {
            error.innerText = "";
            input.value = "";
        }, 2000)
    }else{
        result.innerText = (+input.value / 2.2).toFixed(2);
        clearTimeout(resultTime)

        setTimeout(() => {
            result.innerText = "";
            input.value = "";
        },10000)
    }
    
    
}

input.addEventListener('click',updateResults)