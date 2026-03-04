document.getElementById('checkBtn').addEventListener('click', palindromeChecker)

function isPalindrome (str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  const reverseStr = cleanStr.split('').reverse().join('')
  return cleanStr === reverseStr
}

function palindromeChecker () {
  const inputText = document.getElementById('inputText')
  const result = document.getElementById('result')
  const val = inputText.value
  if (val !== '') {
    if (isPalindrome(val)) {
      result.textContent = `${inputText.value} is a Palindrome`
    } else {
      result.textContent = `${inputText.value} is not a Palindrome`
    }
    result.classList.add('fadeIn')
    inputText.value = ''
  } else {
    alert('Please enter a word to check')
  }
}
