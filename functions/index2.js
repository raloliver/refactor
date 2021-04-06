//Extract Function
//FROM: 
function getProductPrice(productId) {
    let product = getProduct(productId);

    //GET Tax Logic
    let taxesList = getTaxList();
    let tax = taxesList.find((tax) => product.tax == tax.id);

    return product.price * ((1 + tax.value) / 100);
}

//TO: 
function getProductPrice(productId) {
    let product = getProduct(productId);

    return product.price * getTaxPercentage(product.tax);
}


//INLINE FUNCTIONS: 
//FROM: 
let isPromocodeValid = (promocodeId) => {
    let promocode = getPromocode(promocodeId);
    return isPromocodeValidationExpired(promocode.validationDate)
}

let isPromocodeValidationExpired = (promocodeValidationDate) => {
    if (new Date() <= promocodeValidationDate) {
        return true;
    }
    return false;
}

//TO: 
isPromocodeValid = (promocodeId) => {
    let promocodeList = getPromocodeList();
    let promo = promocodeList.find((el) => promocodeId === el.id);

    if (new Date() <= promo.validationDate) {
        return true;
    }

    return false;
}


//PARAMETERIZE FUNCTION: 
//FROM: 
function getPriceDiscounted20percent(price) {
    return price * (1 - 0.20);
}

function getPriceDiscounted30percent(price) {
    return price * (1 - 0.30);
}

//TO: 
function getPriceDiscounted(price, discount) {
    return price * (1 - discount);
}

//REPLACE PARAMETER WITH QUERY: 
//FROM:
let genre = getBookGenre(book);
let calculateDiscountByThemeBook = (book, genre) => {
    // logic the discount based on the book Genre
}

//TO:
calculateDiscountByThemeBook = (book) => {
    let genre = getBookGenre(book);
    // logic the discount based on the book Genre
}