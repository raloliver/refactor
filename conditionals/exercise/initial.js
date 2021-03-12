// Imagine you are working for the code of the local store, where you are working on a function that checks if a product is in discount
// This code has quite a lot of nesting in the if condtions. The goal is to minimize the nesting in this function
// Goal: Refactor the following function to be only 1 level deep in nesting.

function hasPromotion (product) {
    if(product.stock > 0 ){
        if(product.type == 'Drinks'){
            if(product.sub_type == 'Sodas'){
                return true
            } else if(product.sub_type == 'Non-Alcoholic'){
                return true;
            } else{
                return false;
            }
        }
    
        if(product.type == 'Dairy'){
            if(product.sub_type != 'Yogurt'){
                return true
            } 
        }
    }
    
    return false;
}


console.log(hasPromotion({type: 'Drinks', sub_type:'Non-Alcoholic', name:'Orange Juice', stock: 5}));
console.log(hasPromotion({type: 'Drinks', sub_type:'Alcoholic', name:'Beer', stock: 10})); 
console.log(hasPromotion({type: 'Drinks', sub_type:'Sodas', name:'orange fanta', stock:0}));
console.log(hasPromotion({type: 'Drinks', sub_type:'Sodas', name:'coca-cola', stock:2}));
console.log(hasPromotion({type: 'Dairy', sub_type:'Cheese', name:'Gouda cheese', stock:2}));

// After your the changes the result should be: 
// true
// false
// false
// true
// true