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
  currentIndex: 0,
  pressedKey: null
}

function renderCharacter (phrase) {
  $phraseElement = document.createElement('span')
  $phraseElement.textContent = phrase.char

  if (appState.currentIndex === phrase.index) {
    $phraseElement.classList.toggle('current-character')
    if (appState.pressedKey !== phrase.char && appState.pressedKey !== null) {
      $phraseElement.classList.toggle('failed')
      phrase.failures++
    }
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

function calculateScore(phrase) {
  var errorCount = 0
  for (var i = 0; i < phrase.length; i++) {
    errorCount += phrase[i].failures
  }
  var totalCount = errorCount + phrase.length
  return (phrase.length / totalCount) * 100
}

renderAll(phraseArray)

document.body.addEventListener('keydown', (event) => {
  if (event.key === appState.currentCharacter) {
    appState.currentIndex++
    appState.currentCharacter = phraseArray[appState.currentIndex].char
    appState.pressedKey = null
  }
  else {
    appState.pressedKey = event.key
  }

  var $update = document.querySelector('.phrase')
  $update.remove()
  renderAll(phraseArray)
})
