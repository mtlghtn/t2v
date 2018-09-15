class imageDictionary {
    constructor(id, nameList, imagePath){
        this.dict = {};
        var imgRef = {id: id, imgPath: imagePath};
        for(var name in nameList){
            dict[name] = imgRef;
        }
    }

    getDict(){
        return this.dict;
    }
}