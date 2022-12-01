let firstValue = document.querySelector('.C')
let secondValue = document.querySelector('.F')
let converter = document.querySelector('#converter')
let result = document.querySelector('.result')
let convertButton = document.querySelector('.convertButton')
let resetButton = document.querySelector('.resetButton')
let changeButton = document.querySelector('.changeButton')

function convert() {
    if(firstValue.innerHTML === '°C' ){

     if(isNaN(converter.value)  ){
        result.innerHTML = "please enter a valid number"
        result.style.color = "red"
    }else{
        let celicios = converter.value
        let converted = celicios * 9.5 + 32
        result.innerHTML = converted.toFixed(2) + ' °F'
        result.style.color = "yellow"
}       
    }else{

        if(isNaN(converter.value)  ){
            result.innerHTML = "please enter a valid number"
            result.style.color = "red"
        }else{
            let farenheight = converter.value
            let converted = (farenheight-32) * 5 / 9
            result.innerHTML = converted.toFixed(2) + " °C"
            result.style.color = "yellow"
        }
  
       
    }
}
function reset() {
    converter.value = ''
    result.innerHTML= ''
 
}
function swap() {
    if(firstValue.innerHTML === "°C"){
     firstValue.innerHTML = "°F"
     secondValue.innerHTML = "°C"
     document.title = "°F to °C"
     converter.value = ""
     converter.placeholder = '°F'
     result.innerHTML = ""

    }else{
        firstValue.innerHTML = "°C"
        secondValue.innerHTML = "°F"
        document.title = "°C to °F"
        converter.value = ""
        converter.setAttribute("placeholder",'°C')
        result.innerHTML = ""
    }
}

convertButton.addEventListener('click',convert)
resetButton.addEventListener('click',reset)
changeButton.addEventListener('click',swap)
