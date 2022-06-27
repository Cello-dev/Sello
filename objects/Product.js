module.exports = class Product {

    constructor(name, business, taglist, description, img_url, created_date, last_modified){
        this.name = name;
        this.business= business;
        this.taglist = taglist;
        this.description = description;
        this.img_url = img_url;
        this.created_date = created_date;
        this.last_modified = last_modified;
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
    
    get getImgUrl(){
        return this.img_url;
    }

    get getCreatedDate() {
        return this.created_date;
    }

    get getLastModified() {
        return this.last_modified;
    }
}