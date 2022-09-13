const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(startWord==Text&&word==null){
    return undefined
}else if(startWord==Text&&word==undefined){
  return undefined
}
}

module.exports = fillStartWord
