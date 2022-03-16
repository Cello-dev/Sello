class Product{
    constructor(name, business, taglist, description, imgURL){
        this.name = name;
        this.business= business; 
        this.taglist = taglist;
        this.description = description;
        this.imgURL = imgURL; 
    }
    get getName() {
        return this.name;
    }
    get getBusiness(){
        return this.business;
    }
    get getTaglist(){
        return this.taglist;
    }
    getTag(i){
        tag = taglist[i];
        return tag;
    }
    get getDescription(){
        return this.description; 
    }
    get getimgURL(){
        return this.imgURL;
    }
}