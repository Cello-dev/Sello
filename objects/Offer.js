module.exports = class Offer {
    constructor(user, business, item, socials, senderType) {
        this.user = user;
        this.business = business;
        this.item = item;
        this.socials = socials;
        this.senderType = senderType;
    }

    get getUser(){
        return this.user;
    }
    get getBusiness(){
        return this.business;
    }
    get getItem(){
        return this.item;
    }
    get getSocials(){
        return this.socials;
    }
    get getSenderType(){
        return this.senderType;
    }
    
}