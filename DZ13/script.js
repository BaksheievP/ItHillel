
const SMALL_SIZE = { price: 50, callories: 20 }
const MEIDUM_SIZE = { price: 75, callories: 30 };
const BIG_SIZE = { price: 100, callories: 40 };
const TOPPING_CHEESE = { price: 10, callories: 20 };
const TOPPING_SALAD = { price: 20, callories: 5 };
const TOPPING_POTATO = { price: 15, callories: 10 };
const TOPPING_SEASONING = { price: 15, callories: 10 };
const TOPPING_MAYO = { price: 10, callories: 20 };


function Hamburger(inputMenu) {
    this.price = inputMenu.price;
    this.callories = inputMenu.callories;
}
Hamburger.prototype.addTopping = function (topping) {
    this.price = topping.price + this.price;
    this.callories = topping.callories + this.callories;
}
Hamburger.prototype.getPrice = function () {
    return this.price;
}
Hamburger.prototype.getCallories = function () {
    return this.callories;
}


hamburger = new Hamburger(SMALL_SIZE);


