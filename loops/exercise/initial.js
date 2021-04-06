// Exercise: Imagine you are hired to work with the code of a virtual library. The code uses mostly "for" loops to do operations over the books.
// Can you refator the code to not use "for" loop and replace it with operations such as.map,.filter, .every, .some etc..?

const bookList = [{name: 'The Hunger Games', author:'Suzanne Collins', yearRelease: 2009, stock: 10, price: 15},
{name: 'Lord of the Rings', author:'J. R. R. Tolkien', yearRelease: 1954, stock: 7, price: 12},
{name: 'Harry Potter', author:'J. K. Rowling', yearRelease: 1998, stock: 1, price: 10},
{name: 'The Maze Runner', author:'James Dashner', yearRelease: 2010, stock: 0, price: 17},
{name: 'The Witcher', author:'Andrzej Sapkowski', yearRelease: 1992, stock: 20, price: 15},
{name: 'Fantastic Beasts and Where to Find Them', author:'J. K. Rowling', yearRelease: 2001, stock: 10, price: 25}]


function getBooksByAuthor(authorName) {
    let booksToWithAuthor = []

    for(let book of bookList){
        if(book.author === authorName){
            booksToWithAuthor.push(book);
        }
    }

    return booksToWithAuthor;
}

function getBookByYear(year) {
    let booksByYearList = [];

    for(let book of bookList){
        if(book.yearRelease === year){
            booksByYearList.push(book);
        }
    }

    return booksByYearList;
}

function hasBooksByAuthor(authorName){
    for(let book of bookList){
        if(book.author === authorName){
            return true
        }
    }

    return false
}

function hasStock(bookName, numOfCopies) {
    for(let book of bookList){
        if(book.name === bookName && book.stock >= numOfCopies){
            return true;
        }
    }

    return false;
}

function getAverageBookPrice() {
    let sumPriceBooks = 0;
    for(let book of bookList){
        sumPriceBooks = sumPriceBooks + book.price;
    }

    return sumPriceBooks / bookList.length;
}


console.log(getBooksByAuthor('Andrzej Sapkowski')); 
console.log(hasBooksByAuthor('James Dashner')); 
console.log(hasBooksByAuthor('Paulo Coelho'));
console.log(getBookByYear(2003)); 
console.log(getBookByYear(1954)); 
console.log(hasStock('The Witcher', 5));
console.log(hasStock('The Maze Runner', 1));
console.log(getAverageBookPrice());

// Expected Output:
// [{{name: 'The Witcher', author:'Andrzej Sapkowski', yearRelease: 1992, stock: 20, price: 15}}]
// true
// false
// []
// [{name: 'Lord of the Rings', author:'J. R. R. Tolkien', yearRelease: 1954, stock: 7, price: 12}]
// true
// false
// 15.6666666
