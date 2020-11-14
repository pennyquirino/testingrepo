const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeNumbersElement = document.getElementById("includeNumbers")
const includeSymbolsElement = document.getElementById("includeSymbols")
const form = document.getElementById("passwordGeneratorForm")
const passwordDisplay = document.getElementById("passwordDisplay")

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)

characterAmountNumber.addEventListener("input", syncCharacterAmount)
characterAmountRange.addEventListener("input", syncCharacterAmount)


form.addEventListener("submit", e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercase.checked
    const includeNumbers = includeNumbers.checked
    const includeSymbols = includeSymbols.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})



function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat (UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat (NUMBER_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat (SYMBOL_CHAR_CODES)

    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * characterlength)]
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
    characterAmountRange.value = value
    characterAmountNumber.value = value
}

  




