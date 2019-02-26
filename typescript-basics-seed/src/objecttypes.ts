// name property of type string, these are assinging properties to a particular object
// the function is going to return a string, but if it didnt return anything that means you put 
// the void keyword
let pizza: {name: string, price: number, getName(): string} 

pizza = {
    name: 'plain old pepperoni',
    price: 20,
    getName() {
        return pizza.name;
}
}
