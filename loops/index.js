//Ok Loops
for(let index=0; index<=someArray.length; index++){
    //your code 
}

//Good Loops
for(let element of someArray){
    //your code
}


let array = [1,2,3,4];
let squareArray = array.map(function(element) {
    return element * element
})
//Square Array [1,4,9,16]


let array=[35,14,25,1];
let sortedArray = array.sort((el)=>{
    return a - b;
})
//Sorted Array: [1 14 25 35]


let array = [{name:'John', age:15}, {name:'Ted', age:21}, {name:'Ann', age:25}];
let sortedArray = array.sort(function (a, b){
    return b.age - a.age
});
//Sorted Array: {name:'Ann', age:25}, {name:'Ted', age:21}, {name:'John', age:15}

let array = [{name:'John', age:15}, {name:'Ted', age:21}, {name:'Ann', age:25}];
let filteredArray = array.sort(function (element){
    return element.age > 22
});
//Filtered Array: {name:'Ann', age:25}


let array = [{name:'John', age:15}, {name:'Ted', age:21}, {name:'Ann', age:25}];
let result = array.some(function (element){
    return element.age > 22
});
//result: true


let array = [{name:'John', age:15}, {name:'Ted', age:21}, {name:'Ann', age:25}];
let result = array.every(function (element){
    return element.age > 22
});
//result: false

