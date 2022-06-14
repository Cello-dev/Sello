module.exports = class Business {
    constructor(name,handle, address, email, password, productList, selloReq) {
        this.name = name;
        this.handle = handle;
        this.address = address;
        this.email = email;
        this.password = password;
        this.productList = productList;
        this.isLoggedIn = True;
        this.selloReq; 
    }

    get getName() {
        return this.name;
    }
    get getHandle(){
        return "$"+this.Handle
    }
    get getAddress(){
        return this.address;
    }
    get getEmail(){
        return this.email;
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