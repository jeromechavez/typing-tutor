var phraseString = 'grumpy wizards make toxic brew for the evil queen and jack'

function createPhrase(string) {
  phrase = []
  for (var i = 0; i < string.length; i++) {
    phrase.push({char: string.charAt(i), index: i})
  }
  return phrase
}

var phraseArray = createPhrase(phraseString)

var appState = {
  char: phraseArray,
  currentCharacter: 0,
  failures: 0
}

function renderCharacter (phrase) {
  $phraseElement = document.createElement('span')
  $phraseElement.textContent = phrase.char
  if (phrase.index === appState.currentCharacter) {
    $phraseElement.classList.add('current-character')
  }
  return $phraseElement
}

function renderAll(phrase) {
  phrase.forEach(function (object) {
    document.body.appendChild(renderCharacter(object))
  })
}

window.addEventListener('keydown', renderAll(phraseArray))
