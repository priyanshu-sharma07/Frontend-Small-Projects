function detectCharacter() {
    const input = document.getElementById('characterInput')
    const result = document.getElementById('result')
    const char = input.value
    if(isASCII(char)){
        result.textContent = `${char} is an ASCII character.`
    }else{
        result.textContent = `${char} is a Unicode character.`
    }

}

function isASCII(char){
    return char.charCodeAt(0)<=127;
}
