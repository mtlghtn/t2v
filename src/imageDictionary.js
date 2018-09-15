/**
 * @class imageDictionary
 * @author SC Haw
 * @description This object parses object-manifest.json and convert the file into usable data
 */
module.exports = class imageDictionary {
    constructor(id, nameList, imagePath){
        this.dict = new Object();
        this.dict = {};
        var imgRef = {id: id, imgPath: imagePath};
        for(var name in nameList){
            this.dict[nameList[name]] = imgRef;
        }
    }

    //Dictionary getter method
    getDict(){
        return this.dict;
    }
}