const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);

let cart = [
    {
        item : "mustered_oil",
        price : 199
    },
    {
        item : "refine_oil",
        price : 149
    },
    {
        item : "coconut_oil",
        price : 249
    }
]

 const totalPrice = cart.reduce((acc, items) =>acc + items.price ,0) 
 console.log(totalPrice)