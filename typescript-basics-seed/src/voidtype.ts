// this does not exist in the js language 
// meaning that it has no type at all


let selectedTopping: string = "pepperoni";

// selected topping is equal to the topping you jsut passed in
// if there is no type at all and you're not returing anything from a function 
function selectTopping(topping: string): void {
    selectedTopping = topping;
}
selectTopping("bacon");
console.log(selectedTopping);