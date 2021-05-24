// Sneaky Unnecessary exception :
function getOrderPrice(orderList){
    if(orderList.length === 0){
        return 0;
    }
    //(...)
}

function getOrderPrice(orderList){
    if(!orderList || orderList.length === 0){
        return 0;
    }
    //(...)
}

// Duplicated Try Catch(Logic):
function func1(){
    try{
        func2();
    } catch(exception){
        console.log(exception);
    }
}

function func2(){
    try{
        // some function logic
    } catch(exception){
        console.log(exception);
    }
}
// you can remove the unnecessary try catch on func 2 as it will be caught in the func1 try catch:
function func1(){
    try{
        func2();
    } catch(exception){
        console.log(exception);
    }
}

function func2(){
    //your function logic
}

//NOT USE THE error Object:
//Throwing an error this way will not show you the stack trace
throw 'something unexpected happened';

// improved way of throwing an error
throw Error('Something unexpected happened')


