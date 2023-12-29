const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button")
const specialchars = ["%","*","/","-","+","="]
let output = ""

const calculate = (btnvalue) => {
    if (btnvalue === "=" && btnvalue !==""){
        output = eval(output.replace("%","/100"))
    } else if (btnvalue === "DEL"){
        output = output.toString().slice(0,-1)
    } else if (btnvalue ===" AC") {
        output = ""
    }
    else {
        if (output === "" && specialchars.includes(btnvalue)) return
        output += btnvalue
    }
    display.value = output   
}


buttons.forEach(function(i){
    // console.log(i.children)
    i.addEventListener("click", function(e){
    calculate(e.target.dataset.value)
    })
  })
