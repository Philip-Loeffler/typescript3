
// takes in a price or type number and a quanttiy of type number and it returns the sum of a particular order
function sumOrder(price: number, quantity: number): number {
    return price * quantity;
}

// so a different way to write this would be 
 let sumOrders = (price: number, quantity: number ): any=> {

 }
 // so because the function is expecting two numbers we pass them into it here
 // what you're passing into the function is calling an argument,
 // its asks for two params.
const sum = sumOrder(25, 2)

console.log(`total sum: ${sum}`);



// here is optional param
// the ? makes things optional
let sumOrderss: (price: number, quantity?: number): number => {


}