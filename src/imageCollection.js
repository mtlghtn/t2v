class imageCollection {
    constructor(obj = null){
        this.dict = new Object();
        if(obj === null){
            this.dict = {};
        }else{
            this.add(obj);
        }
    }

    //merge objects helper
    extend(obj, src) {
        for (var key in src) {
            if (src.hasOwnProperty(key)) obj[key] = src[key];
        }
        return obj;
    }

    //add another imageDictionary object into the array
    add(obj){
        this.dict = this.extend(dict, obj);
    }

    //find the required imagePath
    find(name){
        if(this.dict.hasOwnProperty(name)){
            return this.dict[name]
        }
        return false;
    }
}