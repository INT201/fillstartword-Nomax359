const { template } = require("@babel/core");

function fillStartWord(startWord, word) {
  if ( word == null || word == undefined){
    return undefined;
  } else if (word.startsWith(startWord)) {
    return word;
  } else {
    fullWord = startWord + word;
    return fullWord;
  }
}

module.exports = fillStartWord;
