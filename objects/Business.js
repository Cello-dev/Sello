module.exports = class Business {

    constructor(name, handle, address, email, avatar_url, date_joined, last_login_date, view_count, product_list) {
        this.name = name;
        this.handle = handle;
        this.address = address;
        this.email = email;
        this.avatar_url = avatar_url;
        this.date_joined = date_joined;
        this.last_login_date = last_login_date;
        this.view_count = view_count;
        this.product_list = product_list;
        this.isLoggedIn = true;
    }

    get getName() {
        return this.name;
    }
    
    get getHandle(){
        return "$"+this.handle
    }
    
    get getAddress(){
        return this.address;
    }
    
    get getEmail(){
        return this.email;
    }

    get getAvatar() {
        return this.avatar_url;
    }

    get getDateJoined() {
        return this.date_joined;
    }

    get getLastLoginDate() {
        return this.last_login_date;
    }

    get getViewCount() {
        return this.view_count;
    }
    
    get getProductList() {
        return this.product_list;
    }
    
    get isLoggedin() {
        return this.isLoggedIn;
    }

    getProduct(product){
        let obj = this.product_list.prototype.find(product);
        return obj;
    }
}