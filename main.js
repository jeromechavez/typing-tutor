var phraseString = 'grumpy wizards make toxic brew for the evil queen and jack'

var characterStrings = phraseString.split('').map((char) => {
  return {char: char}
})

function renderCharacter (phrase) {
  $phraseElement = document.createElement('p')
  $phraseElement.textContent = phrase[0].char
  return $phraseElement
}
