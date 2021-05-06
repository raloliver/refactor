# VARIABLES

Var is the traditional way of writing variables. Nowadays it's mostly replaced by let.

#### Key differences between let and var:

- Temporal dead zone
- Nod redeclaring
- Scope blocked

#### Temporal dead zone

- Using var before declaration will not cause exception
- Using let before declaration will result in exception

![Temporal dead zone](https://i.imgur.com/pm2z1aK.png, "Temporal dead zone")

#### Scope blocked

- Let exist only whitin the context they exist
- Vars are moved outside the scope they exist

![Scope blocked](https://i.imgur.com/LX1J39A.png "Scope blocked")

#### Noredeclaring

- You can declare vars as many time as you want
- Redeclaration of Lets will throw Syntax Errors Exception

![Noredeclaring](https://i.imgur.com/pvGwuaV.png "Noredeclaring")

### CONST Type

> Const for general constants, and variables that are assigned only one time.

## Naming variables

- Good naming provides hints on what the variable is used for.
- Provide hints on the type of variable it is (Array, Json, Set, etc).
  - Examples: personList, personObj, personSet
- Consistent with the naming convention used in the project
- Use searchable names.

#### Split variable

![Split variable](https://i.imgur.com/Hc0rB6F.png "Split variable")

#### Inline variable

![Inline variable](https://i.imgur.com/1c4BGmc.png "Inline variable")

#### Replace Magic Literal

![Replace Magic Literal](https://i.imgur.com/oKgydtO.png "Replace Magic Literal")
