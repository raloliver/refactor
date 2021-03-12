// one nesting lvl
function calculateTax(product, price) {
    const ESSENTIAL_TAX_VALUE = 1.08;
    const NON_ESSENTIAL_TAX_VALUE = 1.15;

    if (product.type === 'Essentials') {
        return price * ESSENTIAL_TAX_VALUE;
    } else {
        return price * NON_ESSENTIAL_TAX_VALUE;
    }
}

//two nesting lvl
function calculateTax(product, price) {
    const ESSENTIAL_TAX_VALUE = 1.08;
    const NON_ESSENTIAL_TAX_VALUE = 1.15;

    if (product.type === 'Essentials') {
        return price * ESSENTIAL_TAX_VALUE;
    } else {
        if (product.type === 'Non-Essentials') {
            return price * NON_ESSENTIAL_TAX_VALUE;
        }
    }
}

//three nesting lvl 
function calculateTax(product, price) {
    const ESSENTIAL_TAX_VALUE = 1.08;
    const NON_ESSENTIAL_TAX_VALUE = 1.15;
    const SOFT_DRINK_TAX_VALUE = 1.18;

    //1st lvl
    if (product.type === 'Essentials') {
        return price * ESSENTIAL_TAX_VALUE;
    } else {
        //2nd lvl
        if (product.type === 'Non-Essentials') {
            //3rd lvl
            if (product.name === 'soft-drink') {
                return price * SOFT_DRINK_TAX_VALUE;
            } else {
                return price * NON_ESSENTIAL_TAX_VALUE;
            }
        }
    }
}



