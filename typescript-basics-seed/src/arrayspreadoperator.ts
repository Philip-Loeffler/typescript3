
const toppings = ['bacon', 'chili'];

const newToppings = ['pepperoni'];
// creates a copy and puts it into an array
const allToppings = [...toppings,...newToppings];

console.log(allToppings)