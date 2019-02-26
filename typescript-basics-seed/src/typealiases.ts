// we can assign any kind of type to type alias
// call back is 

type Size = 'small' | 'medium'; 
type Callback = (size: Size) => void;

let pizzaSize: Size = 'small';

const selectSize = (size: 'small'| 'medium')  => {
    pizzaSize = size;

};

selectSize('small');