// this variable is of type number and it is binded to 10
let pizzaCost: number = 10; 
const pizzaToppings: number = 5; 


// here you need to apply the actually type since "any", in the tsconfig.json has been enabled as strict true. 
// at then end of the function the :number means that the function is going to be returning a number 
function calculatePrice(cost: number, toppings: number): number {
return cost + 1.5 * toppings;
}
const cost: number = calculatePrice(pizzaCost, pizzaToppings);
console.log(`pizza costs: ${cost}`);