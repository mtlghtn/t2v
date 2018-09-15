/**
 * @class imageCollection
 * @author SC Haw
 * @description This class is used as a collection of imageDictionary class. It merges other dictionaries together to
 *              form a dictionary collection. The output data structure is shown below:
 * 
 *    [key - "name of image"] => [[id - "id of object, as defined in manifest"], [imgPath - "path to the image file"]]
 */
module.exports = class imageCollection {
    constructor(obj){
        this.dict = new Object();
        if(!obj){
            this.dict = {};
        }else{
            this.add(obj);
        }
    }

    //merge objects helper
    extend(obj, src) {
        for (var key in src) {
            if (src.hasOwnProperty(key)) {
                if(obj.indexOf(key)) throw "This name is already defined for other object, operation aborted.";
                obj[key] = src[key];
            }
        }
        return obj;
    }

    //add another imageDictionary object into the array
    add(obj){
        this.dict = this.extend(this.dict, obj);
    }

    //find the required imagePath
    find(name){
        if(this.dict.hasOwnProperty(name)){
            return this.dict[name]
        }
        return false;
    }

    //Dictionary getter function
    getDict(){
        return this.dict;
    }
}