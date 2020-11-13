const characterAmtRange = document.getElementById("characterAmtRange")
const characterAmtNumber = document.getElementById("characterAmtNumber")
const includeUppercase = document.getElementById("includeUppercase")
const includeNumberElement = document.getElementById("includeNumber")
const includeSymbolElement = document.getElementById("includeSymbol")
const form = document.getElementById("passwordGeneratorForm")
const passwordDisplay = document.getElementById("passwordDisplay")

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)

characterAmtNumber.addEventListener("input", syncCharacterAmount)
characterAmtRange.addEventListener("input", syncCharacterAmount)


form.addEventListener("submit", e => {
    e.preventDefault()
    const characterAmt = characterAmtNumber.value
    const includeUppercase = includeUppercase.checked
    const includeNumber = includeNumber.checked
    const includeSymbol = includeSymbol.checked
    const password = generatePassword(characterAmt, includeUppercase, includeNumber, includeSymbol)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmt, includeUppercase, includeNumber, includeSymbol) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat (UPPERCASE_CHAR_CODES)
    if (includeNumber) charCodes = charCodes.concat (NUMBER_CHAR_CODES)
    if (includeSymbol) charCodes = charCodes.concat (SYMBOL_CHAR_CODES)

    const passwordCharacters = []
    for (let i = 0; i < characterAmt; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * characterAmt)]
        passwordCharacters.push(String.fromCharCode(characterCode))

    }
    return passwordCharacters.join("")

}
    
function arrayFromLowToHigh(low, high){
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array 
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmtRange.value = value
    characterAmtNumber.value = value
}

  




