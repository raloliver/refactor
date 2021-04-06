//REPLACE CONTROL FLAG WITH BREAK
// FROM
let name;
let found = false;
for (const person of personList) {
    if (!found) {
        if (person.id === id) {
            name = person.name;
            found = true;
        }
    }
}
return name;

// TO: 
let name;
for (const person of personList) {
    if (person.id === id) {
        name = person.name;
        break;
    }
}
return name;


// REPLACE LOOP WITH PIPELINE
// FROM
for (const person of personList) {
    if (person.age > 18) {
        if (person.name == 'John') {
            return true;
        }
    }
}

// TO
personList
    .filter((person) => person.age > 18)
    .some((person) => person.name == 'John')