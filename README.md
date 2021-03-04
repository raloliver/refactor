In the code you'll find one file called "initial.js" and a folder called "solution" where you can find "solution.js", which as you might have guessed contains the solution for the exercise.

The "initial.js" is your starting point and it contains the goal of the exercise and what you should see when you run the code.

To run the code you need to have nodejs installed (https://nodejs.org/en/). Feel free to download any version.

Once installed all you have to do is open a command-prompt in the folder containing "initial.js" and first type "npm install" and then type "node initial" in your command prompt.

This should run the code with all its dependencies installed.

NOTE: In some exercises, when you type "npm install", you might see error "ENOENT": no such file or directory, this is fine, in this exercises there is no external dependencies, you can skip the "npm install" and proceed to the "node initial" command.

After you complete the task, to validate, that the changes do not break the correct behavior make sure the code you see matches the "expected output" which you see at the end of "initial.js" file.

# VARIABLES

Var is the traditional way of writing variables. Nowadays it's mostly replaced by let.

#### Key differences between let and var:

- Temporal dead zone
- Nod redeclaring
- Scope blocked

#### Temporal dead zone

- Using var before declaration will not cause exception
- Using let before declaration will result in exception

![Temporal dead zone](https://i.imgur.com/pm2z1aK.png)

#### Scope blocked

- Let exist only whitin the context they exist
- Vars are moved outside the scope they exist

![Scope blocked](https://i.imgur.com/LX1J39A.png)

#### Noredeclaring

- You can declare vars as many time as you want
- Redeclaration of Lets will throw Syntax Errors Exception

![Noredeclaring](https://i.imgur.com/pvGwuaV.png)

### CONST Type

> Const for general constants, and variables that are assigned only one time.

## Naming variables

- Good naming provides hints on what the variable is used for.
- Provide hints on the type of variable it is (Array, Json, Set, etc).
  - Examples: personList, personObj, personSet
- Consistent with the naming convention used in the project
- Use searchable names.

#### Split variable

![Split variable](https://i.imgur.com/Hc0rB6F.png)

#### Inline variable

![Inline variable](https://i.imgur.com/1c4BGmc.png)

#### Replace Magic Literal

![Replace Magic Literal](https://i.imgur.com/oKgydtO.png)
