// describing a type to the typescript compiler that there might be several types
// union type gives flexibility with the amount of types coming in

let pizzaSize : string = "1"

function selectSize(size: '1' | '2' | '3') : void {
pizzaSize = size;

}
// here we are invoking our function
selectSize("2");

console.log(`pizza size ${pizzaSize}`)