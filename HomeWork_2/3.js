function Hamburger(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
};

Hamburger.SIZE_SMALL = {
    name: "SMALL",
    price: 50,
    calories: 20
}
Hamburger.SIZE_LARGE = {
    name: "LARGE",
    price: 100,
    calories: 40
}
Hamburger.STUFFING_CHEESE = {
    name: "CHEESE",
    price: 10,
    calories: 20
}
Hamburger.STUFFING_SALAD = {
    name: "SALAD",
    price: 20,
    calories: 5
}
Hamburger.STUFFING_POTATO = {
    name: "POTATO",
    price: 15,
    calories: 10
}

Hamburger.TOPPING_MAYO = {
    name: "MAYO",
    price: 20,
    calories: 5
}
Hamburger.TOPPING_SPICE = {
    name: "SPICE",
    price: 15,
    calories: 0
}

Hamburger.prototype.addTopping = function  (topping) {
    try{
    if (!this._toppings.includes(topping)) {
        return this._toppings.push(topping)
    }
} catch(e){console.log("topping undefined" + e.name)};

Hamburger.prototype.removeTopping = function (topping) {
    return this._toppings = this._toppings.filter(key => key !== topping)
};

Hamburger.prototype.getSize = function () {
    return this._size.name
};
Hamburger.prototype.getStuffing = function () {
    return this._stuffing
};
Hamburger.prototype.getToppings = function () {
    return this._toppings
};

Hamburger.prototype.calculatePrice = function () {
    var price = this._size.price + this._stuffing.price;
    this._toppings.forEach(element => {
        price += element.price;
    });
    return price;
};
Hamburger.prototype.calculateCalories = function () {
    var calories = this._size.calories + this._stuffing.calories;
    this._toppings.forEach(element => {
        calories += element.calories;
    });
    return calories;
};







// маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_M);
console.log(hamburger)
// спросим сколько там калорий
// console.log("Calories: %f", hamburger.calculateCalories());
// // сколько стоит
// console.log("Price: %f", hamburger.calculatePrice());
// // я тут передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger.TOPPING_SPICE);
// // А сколько теперь стоит? 
// console.log("Price with sauce: %f", hamburger.calculatePrice());
// // Проверить, большой ли гамбургер? 
// console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// // Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// console.log("Have %d toppings", hamburger.getToppings().length); // 1
