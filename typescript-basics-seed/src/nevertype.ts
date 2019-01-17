// telling the ts compiler that a value will never occur
// you're probably never going to use this type
// use it when return type is never ging to actually return something 




function orderError(error: string) {
    throw new Error(error);
    // never going to return a value
}

orderError("something went wrong");