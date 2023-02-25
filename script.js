let $ = document
let input = $.querySelector(".input")
let btn = $.querySelector(".btn")
let showResult = $.querySelector(".showResult")


let sum = 0;

btn.addEventListener("click" , ()=> {
    let inputValue = input.value

    for(let i = 0 ; (inputValue / 10) != 0 ; i++){
        sum = sum + (inputValue % 10)
        inputValue = Math.floor(inputValue / 10)
    }
    showResult.innerHTML = sum
    sum = 0
    input.value = ""
})