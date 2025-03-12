let inp_el1 = document.getElementById("inp1");
let inp_el2 = document.getElementById("inp2");
let copy = document.getElementById("copy")
let length = document.getElementById("len")
let alpha = document.getElementById("toggle-alpha")
let num = document.getElementById("toggle-num")
let sym = document.getElementById("toggle-symbol")
let password = ""
let password2 = ""
let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g",
    "h", "j", "k", "l", "m", "n", "b", "v", "c", "x", "z", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}",
    ":", ";", ">", "<", "?", "/", "|"
]
let alphabet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g",
    "h", "j", "k", "l", "m", "n", "b", "v", "c", "x", "z"]
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}",
    ":", ";", ">", "<", "?", "/", "|"]
let alphaNum = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g",
    "h", "j", "k", "l", "m", "n", "b", "v", "c", "x", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let alphaSymbol = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g",
    "h", "j", "k", "l", "m", "n", "b", "v", "c", "x", "z", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}",
    ":", ";", ">", "<", "?", "/", "|"]
let numSym = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}",
    ":", ";", ">", "<", "?", "/", "|", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let tempNum = 0;
function generate() {
    if (length.value === "") {
        alert("please enter the valid number")
        return;
    }
    tempNum = parseInt(length.value)

    password = generateCombination()
    password2 = generateCombination();
    inp_el1.value = password
    inp_el2.value = password2
    copy.textContent = "Click the password to copy"

}
inp_el1.addEventListener("click", function () {
    if (password.length === 0) {
        alert("The password field is empty, Please click the generate button")
    }
    else {
        inp_el1.select();
        document.execCommand("copy");
        alert(`The password ${password} is copied to your clipboard`);
    }

})
inp_el2.addEventListener("click", function () {
    if (password2.length === 0) {
        alert("The password field is empty, Please click the generate button")
    }
    else {
        inp_el2.select();
        document.execCommand("copy");
        alert(`The password ${password2} is copied to your clipboard`);
    }

})

function randomAllPassword() {
    let temp = "";
    for (let i = 0; i < tempNum; i++) {
        temp += arr[Math.floor(Math.random() * 60)]
    }
    return temp
}


function generateCombination() {
    if (alpha.checked && num.checked && sym.checked) {
        return randomAllPassword()
    }
    else if (alpha.checked && num.checked) {
        return randomAlphaNum()
    }
    else if (alpha.checked && sym.checked) {
        return randomAlphaSymbol()
    }
    else if (num.checked && sym.checked) {
        return randomNumSymbol()
    }
    else if (alpha.checked) {
        return randomAlphabet()
    }
    else if (num.checked) {
        return randomNumber()
    }
    else if (sym.checked) {
        return randomSymbol()
    }
    return randomAllPassword()
}

function randomAlphaNum() {
    let temp = "";
    for (let i = 0; i < tempNum; i++) {
        temp += alphaNum[Math.floor(Math.random() * alphaNum.length)]
    }
    return temp
}
function randomAlphaSymbol() {
    let temp = "";
    for (let i = 0; i < tempNum; i++) {
        temp += alphaSymbol[Math.floor(Math.random() * alphaSymbol.length)]
    }
    return temp
}
function randomNumSymbol() {
    let temp = "";
    for (let i = 0; i < tempNum; i++) {
        temp += numSym[Math.floor(Math.random() * numSym.length)]
    }
    return temp
}
function randomAlphabet() {
    let temp = "";
    for (let i = 0; i < tempNum; i++) {
        temp += alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    return temp
}
function randomNumber() {
    let temp = "";
    for (let i = 0; i < tempNum; i++) {
        temp += number[Math.floor(Math.random() * number.length)]
    }
    return temp
}
function randomSymbol() {
    let temp = "";
    for (let i = 0; i < tempNum; i++) {
        temp += symbols[Math.floor(Math.random() * symbols.length)]
    }
    return temp
}