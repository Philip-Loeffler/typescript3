// define structure or shape of pizza


interface Pizza  {
    name: string;
    sizes: string []
    getAvailableSizes(): string[];
}
// pizza is of type pizza
let pizzas: Pizza; 


function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes
        }
    };
}
pizzas = createPizza('pepperoni', ['small', 'medium']);