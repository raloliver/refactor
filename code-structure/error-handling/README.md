### Error handling

**What is an error in code?**

Typically, an error happens when something happens that deviates from the normal behavior of the code.

- User provide invalid input
- Database is down

**What to consider when dealing with errors?**

- App should be able to fail gracefully
- Ideally, they should be able to provide some insight to the person experience there on how we can fix
- If they're very severe and there is nothing the user can do about it, it should notify developer team or someone that can help fixing the problem

![Common pitfall when dealing with errors](https://i.imgur.com/iROQchP.png "Common pitfall when dealing with errors")

#### Sneaky unnecessary exception

Example: when we cannot access the field length of null or undefined.

![Sneaky unnecessary exception](https://i.imgur.com/5Q9Azl8.png "Sneaky unnecessary exception")

#### Duplicated Try Catch Logic

![Duplicated Try Catch Logic](https://i.imgur.com/bnbQ97p.png "Duplicated Try Catch Logic")

#### Nothing user the Error object

![Nothing user the Error object](https://i.imgur.com/O6upYtT.png "Nothing user the Error object")

### Error Post Mortem (Medical Context)

In the medical context, it means studying after death of a pacient, and doctors try to figure out what went wrong and how can they prevent the worst case in the future.

> We should analyze an error after happening and find out what went wrong.

1. Could this error be avoided? By changing the code can we avoid not having this error?
1. If not, could the user have fixed it by himself, if we provided a better error message?
1. If not, did we get a good message to the devs so that they could fix it?

### Error Notify (How can you notify developers when an error in the form of an exception happens?)

1. Email notification system
    - Pros:
        - Notified in real time
        - Proactive error solving
    - Cons:
        - Hard to manage issues in a mail inbox
        - Not possible to assign to team members one of the email
1. Notification system: external plataforms for managing errors and exceptions: Bugsnag, Honeybadger, etc.
    - Notifications real-time
    - Assign team members to errors
    - Flag the error as solved when the error is fixed
    - Dashboard and complete timelines when the errors occurred