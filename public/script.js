//INDICANDO CONST A CADA ELEMETO POR SU ID
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}
//ALERTA CLIPBOARD SUCCESS
clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerText;
    alertCopied.classList.remove('hide1')
    alertCopied.classList.add('show1')

    setTimeout(function(){
        alertCopied.classList.remove('show1')
        alertCopied.classList.add('hide1')
    }, 1500)
    if (!password) {
        return;
    }
    navigator.clipboard.writeText(password);



})

generateEl.addEventListener('click', () =>{
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatePassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

    if (typesCount === 0) {
        return ''
    }

    for (let i = 0; i < length; i+= typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatePassword += randomFunc[funcName]()
        })
        
    }

    const finalPassword = generatePassword.slice(0, length)

    return finalPassword
}

//SELECCION ALEATORIA DE MINUSCULAS Math.random() GENERA UN NUMERO ENTRE 0 Y 1, Math.floor LO REDONDEA HACIA HABAJO Y SE MULTIPLICA POR 26 QUE SON LAS LETRAS DEL ALFABETO INGLÉS Y SE SUMA 97 QUE ES EL CODIGO UNICODE DE LA LETRA "a"
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() *26) + 97)
}
//SELECCION ALEATORIA DE MINUSCULAS Math.random() GENERA UN NUMERO ENTRE 0 Y 1, Math.floor LO REDONDEA HACIA HABAJO Y SE MULTIPLICA POR 26 QUE SON LAS LETRAS DEL ALFABETO INGLÉS Y SE SUMA 65 QUE ES EL CODIGO UNICODE DE LA LETRA "A"
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
//SELECCIONA UN NUMERO ALEATORIO DEL 1 A 9 Math.random() GENERA UN NUMERO ENTRE 0 Y 1, Math.floor LO REDONDEA HACIA HABAJO Y SE MULTIPLICA POR 10 QUE SON LOS DIGITOS DEL SISTEMA DECIMAL Y SE LE SUMA 48 QUE ES EL CODIGO UNICODE PARA EL NUMERO "0"
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
//SELECCIONA UN SIMBOLO DE LA "const symbols" Math random() GENERA UN NUMERO ENTRE 0 Y 1, Math floor LO REDONDEA HACIA ABAJO Y SE MULTIPLICA POR EL LARGO DE SIMBOLOS
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}


// ALERTA PASSWORD GENERATE

var generateSuccess = document.getElementById('generate')
var alertSuccess = document.getElementById('alertSuccess')
var alertCopied = document.getElementById('alertCopied')
var clipboard = document.getElementById('Clipboard')

generateSuccess.addEventListener('click',function (){
    alertSuccess.classList.remove('hide')
    alertSuccess.classList.add('show')

    setTimeout(function() {
        alertSuccess.classList.remove('show')
        alertSuccess.classList.add('hide')
    }, 1500);
})






