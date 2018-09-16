'use strict';
var images = require('./images.json')

const getImageObject = function(name){
  for(var image of images){
    if(image.name == name){
      return image;
    }
  }
  return null;
};

module.exports = {
  getImageObject: getImageObject,
};
