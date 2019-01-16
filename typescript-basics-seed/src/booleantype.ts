const pizzas: number = 5; 



// a boolean type is what is ging to be returned. and here we see the first if statemnt because of the number of pizzas
function offerDiscount(orders: number): boolean {
    return orders >= 3;
}

if(offerDiscount(pizzas)) {
    console.log(`you're entitled to a discount`);
}else{
    console.log(`oder more than 3 pizzas for a discount`);

}