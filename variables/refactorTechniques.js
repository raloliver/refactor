// Replace Temporary Variable with Query

//Inline Variable
//from:
function calculatePrice(userId, product) {
    const userDiscount = getUserDiscount(userId);

    return product.price * (1 - userDiscount);
}

//to:
function calculateTax(userId, product) {
    return product.price * (1 - (getUserDiscount(userId)));
}


// Split Variables
// from:
let temp = width * height;
console.log(temp);
temp = 4 * width;
console.log(temp);

// TO:
let area = width * height;
console.log(area);
let perimeter = 4 * width;
console.log(perimeter);


// Replace Magic Literal
//from:
function calculateTax(product) {
    return product.price * (1 + (0.10));
}

//to:
const TAX_PERCENTAGE = 0.10;

function calculateTax(product) {
    return product.price * (1 + TAX_PERCENTAGE);
}
