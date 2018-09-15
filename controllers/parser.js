/*
 * Process a raw sentence to output 2 object names and their relative position.
 * Raw sentence syntax: <Object A> <preposition> <Object B>
 * Functions provided are easy to break since no checking has been implemented. This is just for demo purpose.
 */

const nlp = require('compromise');
const p = require('./prepositions');

const buildWordStack = function(rawSentence){
  sentence = nlp(rawSentence);
  nounStack = []
  prepStack = []
  // clauses = text.clauses();
  nouns = sentence.nouns().data();
  for(noun of nouns){
    nounStack.push(noun.normal);
  }
  terms = sentence.terms().data();
  var words = []
  for(term of terms){
    words.push(term.normal);
  }
  prepStack = p.getPrepositions(words);
  return {
    nounStack, prepStack
  }
};

const setRelativePosition = function(nounStack, prepStack){
  return {
    objectA: nounStack.shift(),
    objectB: nounStack.shift(),
    action: p.relativePosition(prepStack.shift())
  }
};

const parseSentence = function(rawSentence){
  parsed = buildWordStack(rawSentence);
  return setRelativePosition(parsed.nounStack, parsed.prepStack);
};

module.exports = {
  parseSentence: parseSentence
}
