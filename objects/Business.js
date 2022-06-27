module.exports = class Business {

    constructor(name, handle, address, email, img_url, created_date, last_login_date, view_count, productList, selloReq) {
        this.name = name;
        this.handle = handle;
        this.address = address;
        this.email = email;
        this.img_url = img_url;
        this.created_date = created_date;
        this.last_login_date = last_login_date;
        this.view_count = view_count;
        this.productList = productList;
        this.isLoggedIn = true;
        this.selloReq = selloReq;
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

    get getImgUrl() {
        return this.img_url;
    }

    get getCreatedDate() {
        return this.created_date;
    }

    get getLastLoginDate() {
        return this.last_login_date;
    }

    get getViewCount() {
        return this.view_count;
    }
    
    get getProductList() {
        return this.productList;
    }
    
    get isLoggedin() {
        return this.isLoggedIn;
    }

    getProduct(product){
        productinst =  this.productList.prototype.find(product);
        return productinst;
    }
}