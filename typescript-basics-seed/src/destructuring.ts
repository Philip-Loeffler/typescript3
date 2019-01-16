const pizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni'],
};
// this is saying that we are getting an object coming through one arguemnt with a name argument and a toppings property
function order({name, toppings}) {
console.log(name, toppings);
}

order(pizza); 