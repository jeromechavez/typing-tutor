var phraseString = 'grumpy wizards make toxic brew for the evil queen and jack'

function createPhrase(string) {
  phrase = []
  for (var i = 0; i < string.length; i++) {
    phrase.push({char: string.charAt(i), index: i, failures: 0})
  }
  return phrase
}

var phraseArray = createPhrase(phraseString)

var appState = {
  char: phraseArray,
  currentCharacter: phraseArray[0].char,
  currentIndex: 0
}

function renderCharacter (phrase) {
  $phraseElement = document.createElement('span')
  $phraseElement.textContent = phrase.char
  if (phrase.index === appState.currentIndex) {
    $phraseElement.classList.add('current-character')
  }
  return $phraseElement
}

function renderAll(phrase) {
  $phraseAll = document.createElement('div')
  $phraseAll.classList.add('phrase')

  appState.char.forEach(function (object) {
    $phraseAll.appendChild(renderCharacter(object))
  })
  document.body.appendChild($phraseAll)
}

renderAll(phraseArray)

document.body.addEventListener('keydown', (event) => {
  if (event.key === appState.currentCharacter) {
    appState.currentIndex++
    appState.currentCharacter = phraseArray[appState.currentIndex].char
  }
  else {
    phraseArray[appState.currentIndex].failures++
  }

  var $update = document.querySelector('.phrase')
  $update.remove()
  renderAll(phraseArray)
})
