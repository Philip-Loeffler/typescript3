const pizzas = [
    {name : 'pepperoni', toppings: ['pepperoni'] }
];
// we have an array "pizzas", we define the value "(pizza)" then define the function =>
// the arrow function doesnt bind any this value, it just uses whatever this value is available 
const mappedPizzas = pizzas.map((pizza) => {
    return pizza.name.toUpperCase();
});

console.log(mappedPizzas);

// now here is an implicit return, your dont need the return statement here 
const mappedPizzas = pizzas.map((pizza) => { pizza.name.toUpperCase();
    console.log(mappedPizzas);


}