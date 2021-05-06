# FUNCTIONS

![Implicit Return](https://i.imgur.com/lirfOhP.png "Implicit Return")

![Scope in arrow and in normal functions](https://i.imgur.com/4cHiw5F.png "Scope in arrow and in normal functions")

#### ASYNC FUNCTIONS

> JavaScript is single threaded, it means JavaScript must have special behavior when dealing with operations that might be too heavy and can cause the thread to be blocked.

**Callback: In the callback, what we would do is we would send the function that when the Pearl execution would be finished, it would call the function past when it was done.**

This pattern was repeated for all functions written in callback style. The first parameter would be the error parameter and then the second one would be for the success case.

1. Promises
1. Async/Await <= use this one (sintax sugar for promises)

![Callback to async/await with Bluebird](https://i.imgur.com/jamf978.png "Callback to async/await with bluebird")

First, you remove the returns of promises from functions you are calling and convert them to async/await. Then you replace the original function where you have the dot then and catch and you just replace them by awaiting calls and everything is refactored to be using the improved syntax of async/await.

![Promises to async/await](https://i.imgur.com/RvNyHCZ.png "Promises to async/await")
![Promises to async/await: step 1](https://i.imgur.com/X03CQmP.png "Promises to async/await: step 1")
![Promises to async/await: step 2](https://i.imgur.com/R0gI61p.png "Promises to async/await: step 2")

#### EXTRACT FUNCTION

This technique is great when you have big methods that it makes sense to break down into smaller steps.

![Extract Function](https://i.imgur.com/97fd8y4.png "Extract Function")

#### INLINE FUNCTION

![Inline Functions](https://i.imgur.com/n92DF38.png "Inline Function")

1. Parametize function: use parameters to control function behavior
1. Replace parameter with query: get values inside of the function as oppesed as passing params

