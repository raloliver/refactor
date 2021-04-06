# LOOPS

1. For... of is considered the modern and less error-prone way of writing loops.
2. Consider a template of a combination of template operations such as map, filter, to perform operations that require iterations.
3. Replace loop with pipelines
4. Replace Control Flag with break

### For Loop

![Avoid this](https://i.imgur.com/qSJkqnh.png)

- Hard to have a consensus (Should start in zero index or one? Should I go to length or two length minus one?)
- Easier to make mistakes

![Modern Version](https://i.imgur.com/854XubU.png)

- Reduces the possibility of error while iterating an array.
- Faster typing and fewer variables to manage.

#### Special Loops

`.map()`
Provide a function that will be applied to every single element of an array
![Function to square every single element with .map()](https://i.imgur.com/nC8KSp2.png)

`.sort()`
Sort the array based on the condition provided
![Order the last to first](https://i.imgur.com/kcsFzua.png)
You can use it to sort alphabetically adjacent by one
![Order based on value of property](https://i.imgur.com/uRhxFnG.png)

`.filter()`
Filter out elements that don't match the criteria provided in the parameters.
![Based on value of property](https://i.imgur.com/uRhxFnG.png)

#### Specific Conditiona Loops

`.some()`
Check if at least one of the elements matches the condition passed to some.
![Return a boolean](https://i.imgur.com/AQZT1g0.png)

`.every()`
Check if every element matches the condition passed to every function.
![Return a boolean](https://i.imgur.com/KVpehlN.png)

### Replace Loop with Pipeline

![Replace Loop with Pipeline](https://i.imgur.com/9zb9uuJ.png)

### Replace Control Flag with Break

![Replace Control Flag with Break](https://i.imgur.com/An5D46D.png)
