const pizza = {
    name: "pepperoni",
    price: 15

    // if there is a : then something you're creating a value
    //then () it is a function 
    
};

const toppings = ['pepperoni'];

// creating a property off of the value of another property 
const order = { pizza, toppings };

// here you are doing the exact same thing with a function

function createOrder(pizza, toppings) {
    return {pizza, toppings };

}
console.log(createOrder(pizza, toppings));