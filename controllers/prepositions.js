/*
 * A helper for parsing preposition from a sentence since compromise does not provide an API for that.
 * For simplicity of the demo, only predefined prepositions in acceptedPrepositions will be processed
 */

'use strict';

const acceptedPrepositions = [
  'in', 'at', 'by', 'next',
  'beside', 'on', 'over', 'above',
  'under', 'below'
]

const actionMap = [
  {
    prepositions: ['in'],
    action: 'center',
  },
  {
    prepositions: ['at', 'by', 'next', 'beside'],
    action: 'left',
  },
  {
    prepositions: ['on', 'over', 'above'],
    action: 'up',
  },
  {
    prepositions: ['under', 'below'],
    action: 'down',
  }
];

const isAcceptedPreposition = function(word){
  return acceptedPrepositions.includes(word)
};

const getPrepositions = function(wordList){
  var prepositionsList = [];
  for(var word of wordList){
    if(isAcceptedPreposition(word)){
      prepositionsList.push(word);
    }
  }
  return prepositionsList;
};

const relativePosition = function(preposition){
  for(var iter of actionMap){
    if(iter.prepositions.includes(preposition)){
      return iter.action
    }
  }
};

module.exports = {
  getPrepositions: getPrepositions,
  relativePosition: relativePosition,
};
