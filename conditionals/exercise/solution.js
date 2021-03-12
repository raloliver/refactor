
function hasPromotion (product) {
    if(product.stock == 0 ) {
        return false;
    }
    if(product.type == 'Drinks' && (product.sub_type == 'Non-Alcoholic'|| product.sub_type == 'Sodas')){
        return true
    }

    if(product.type == 'Dairy' && product.sub_type != 'Yogurt'){
        return true
    }

    return false;
}


console.log(hasPromotion({type: 'Drinks', sub_type:'Non-Alcoholic', name:'Orange Juice', stock: 5}));
console.log(hasPromotion({type: 'Drinks', sub_type:'Alcoholic', name:'Beer', stock: 10})); 
console.log(hasPromotion({type: 'Drinks', sub_type:'Sodas', name:'orange fanta', stock:0}));
console.log(hasPromotion({type: 'Drinks', sub_type:'Sodas', name:'coca-cola', stock:2}));
console.log(hasPromotion({type: 'Dairy', sub_type:'Cheese', name:'Gouda cheese', stock:2}));

// Expected Result:
// true
// false
// false
// true
// true