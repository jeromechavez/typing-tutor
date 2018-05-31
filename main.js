function createPhrase (string) {
  var phrase = []
  for (var i = 0; i < string.length; i++) {
    phrase.push({char: string.charAt(i)})
  }
  return phrase
}
