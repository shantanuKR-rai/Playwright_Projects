const isMember = true;
const cartTotal = 5000;
let couponCode='Extra10';
let discount = 0;
if (isMember == true) {

    if (cartTotal >= 5000) {
        if (couponCode === "Extra10") {
            discount = 25;
            console.log(`Discount: ${discount}%`);
            let finalAmount = cartTotal-(cartTotal* discount)/100;
            console.log(finalAmount);
        }
        else {
            discount = 20;
            console.log(`Discount: ${discount}%`);
            let finalAmount = cartTotal-(cartTotal* discount)/100;
            console.log(finalAmount);
        }
    }
}