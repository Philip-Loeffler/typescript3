// typescript picking up on your types 




type Pizza = {name: string, toppings: number}; 

const pizza = {name: "blazing inferno", toppings: 5 };

// takes json object and turns it into a string 
const serialzed = JSON.stringify(pizza);
// takes the json string and turns it back into a javascript object
function getNameFromJSON(obj: string): any {
    return (JSON.parse(obj) as Pizza).name;
}

getNameFromJSON(serialzed);
