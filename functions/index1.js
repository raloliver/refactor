//Normal Function
function myAmazingFunction (param1, param2){

}
myAmazingFunction(param1, param2);

//Arrow Function 
myAmazingFunction = (param1, param2) => {

}
myAmazingFunction(param1, param2);

//Single Param Function, you can avoid the () for a single param
myAmazingFunction = param1 => {

}

// Arrow Function Implicit Return: 
myAmazingFunction = param => param * param;
//IS the same as :
myAmazingFunction = param => {return param * param};


// Arrow Function Vs Normal Function:
let me = {
    name: "Joao Gomes",
    thisInArrow: () => {
        console.log("My name is: " + this.name); // no 'this' exists in here 
    },
    thisInRegular() {
        console.log("My name is: " + this.name); // 'this' works here 
    }
};

me.thisInArrow(); // My name is: 
me.thisInRegular(); // My name is: Joao Gomes


//Async Code: Callback style:
fs.readFile('/etc/start', (err, data) => {
    if (err) {
        throw err;
    }

    console.log(data);
});

//Promise Style: 
let myPromise = new Promise((resolve, reject) => {
    // use resolve(returnValue) for success.
    // use reject(returnValue) for error.
});

myPromise.then((returnValue) => {
    /*Called if called resolve in Promise, contains the value passed to function */
}).catch((returnValue) => {
    /*Called if called reject in Promise, contains the value passed to function*/
});

//Chaining multiple promises: 
myPromise.then((el) => {
    /*function with promises*/
})
.then(() => {
    /*function with promises*/
})
.then(() => {
    /*function with promises*/
}).catch((el) => {
    /* CALLED IF ONE OF .then rejects the result*/
})

// Async Await Style:
let asyncFunction = async () => {
    try {
        let res = await myAsyncOperation(); // Success case writes in let
        await myAnotherAsyncOperation(res);
    } catch (exception) {
        //Error case
    }
}


//Callback code refactored to async/await: 
const Bluebird = require('bluebird');
const fs = Bluebird.promisifyAll(require('fs'));

try {
    let data = await fs.readFile('/etc/start');
} catch (exception) {
    //Do something if error
}

//Promise code refactored to async/await 
async function loadData() {
    try {
        await loadDataAsync();
    } catch (exception) {
        console.log('Exception: ', exception);
    }
}

async function loadDataAsync() {
    return await someFunction();
}
