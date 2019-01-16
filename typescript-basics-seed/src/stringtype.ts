const coupon: string = "pizza25";

// the normalize coupong function takes a code of type string and returns a string
function normalizeCoupon(code: string): string {
    return code.toUpperCase(); 

}
 
const couponMessage: string = ` the final coupon is ${normalizeCoupon(coupon)}`;
console.log(couponMessage);




































