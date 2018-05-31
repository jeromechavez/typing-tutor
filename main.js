var phraseString = 'grumpy wizards make toxic brew for the evil queen and jack'

function createPhrase(string) {
  phrase = []
  for (var i = 0; i < string.length; i++) {
    phrase.push({char: string.charAt(i)})
  }
  return phrase
}

var phraseArray = createPhrase(phraseString)

function renderCharacter (phrase) {
  $phraseElement = document.createElement('span')
  $phraseElement.textContent = phrase.char
  return $phraseElement
}

function renderAll(phrase) {
  phrase.forEach(function (object) {
    document.body.appendChild(renderCharacter(object))
  })
}
renderAll(phraseArray)

var appState = {
  char: phrase
}
