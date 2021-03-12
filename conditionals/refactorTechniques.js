// Decompose Conditionals: 
// Sometimes conditionals are a bit hard to read, one simple way is to wrap them under a function with a descriptive name

// FROM:
if (currentDate.getHours() > 9 && currentDate.getHours() < 17 && currentDate.getDay() != 0) {
    return 'Open';
} else {
    return 'Closed';
}

// TO:
if (isStoreOpen(currentDate)) {
    return 'Open';
} else {
    return 'Closed';
}

function isStoreOpen(currentDate){
    return currentDate.getHours() > 9 && currentDate.getHours() < 17 && currentDate.getDay() != 0
}

// Return Early or Guard clause
//FROM:
function getPayAmount() {
    let result;
    if (isRetired)
        result = retiredAmount();
    else {
        if (isMarried)
            result = marriedAmount();
        else {
            if (isSeparated)
                result = separatedAmount();
            else
                result = normalPayAmount();
        }
    }
    return result;
}

//TO:
function getPayAmount() {
    if (isRetired) {
        return retiredAmount();
    }
    if (isMarried) {
        return marriedAmount();
    }
    if (isSeparated) {
        return separatedAmount();
    }

    return normalAmount();
}


// Remove unnecessary "Else" Statement
//From: 
if (currentDate.getHours() > 9 && currentDate.getHours() < 17 || currentDate.getDay() != 0) {
    return 'Open';
}else {
    return 'Closed';
}
//TO: 
if (currentDate.getHours() > 9 && currentDate.getHours() < 17 || currentDate.getDay() != 0) {
    return 'Open';
}
return 'Closed';