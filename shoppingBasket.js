class ShoppingBasket {
    constructor() {
        this.items = [];
    }

    addItem(candy) {
        this.items.push(candy);
        console.log(this.items)
        return;
    }

    getTotalPrice() {
        let totalPrice = 0
        this.items.forEach((item) => totalPrice += item.price)
        console.log(this.items)
        return totalPrice;
    }
}

module.exports = ShoppingBasket;