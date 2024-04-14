result -

1. What type of error occurs if you pass a value that is out of the function parameters range?

- [ ] TypeError
- [ ] URIError
- [ ] RangeError
- [ ] ReferenceError
- [ ] SyntaxError
- [ ] EvalError

2. The 'message' property of Error object:

- [ ] represents the name for the type of error
- [ ] contains the path to the file that raised this error
- [ ] contains a brief description of the error if one is available or has been set
- [ ] offers a trace of which functions were called, and in what order

3. Can the name 'err' be changed to another name in the code try { ... } catch(err) { ... }?

- [ ] yes
- [ ] no
- [ ] on 'error' only

4. Will the catch block execute if there is a 'return' in the try block?

- [ ] yes
- [ ] no
- [ ] depends on the code inside the try block

5. For all built-in errors, the error object has properties:

- [ ] name
- [ ] fileName
- [ ] message
- [ ] stack
- [ ] lineNumber
- [ ] errors

6. Select the correct statements regarding the error event on a Window object:

- [ ] window.onerror receives more than one argument
- [ ] callback in window.addEventListener() receives a single ErrorEvent object
- [ ] window.onerror can cancel the event's default behavior by returning false
- [ ] window.onerror can cancel the event's default behavior by returning true
- [ ] the event object is a UIEvent instance if it was generated from a user interface element, or an Event instance otherwise
- [ ] if you cancel the default behaviour of the error event of Window, the script will not stop executing

7. The try...catch statement is...

- [ ] synchronous
- [ ] asynchronous
- [ ] try asynchronous, catch synchronous
- [ ] catch asynchronous, try synchronous

8. What type of error occurs when you try to access a variable that doesn't exist?

- [ ] RangeError
- [ ] EvalError
- [ ] URIError
- [ ] SyntaxError
- [ ] TypeError
- [ ] ReferenceError

9. What type of error occurs when all promises passed to Promise.any() are rejected?

- [ ] RangeError
- [ ] AggregateError
- [ ] ReferenceError
- [ ] TypeError
- [ ] InternalError
- [ ] EvalError

10. The 'name' property of Error object:

- [ ] represents the name for the type of error
- [ ] contains the path to the file that raised this error
- [ ] contains a brief description of the error if one is available or has been set
- [ ] offers a trace of which functions were called, and in what order

11. What can be an error object in the syntax 'throw <error object>'?

- [ ] number
- [ ] string
- [ ] object
- [ ] boolean
- [ ] all of the above
- [ ] none of the above

12. What type of error occurs when you try to read a property or call a method of an undefined object?

- [ ] RangeError
- [ ] URIError
- [ ] TypeError
- [ ] ReferenceError
- [ ] SyntaxError
- [ ] EvalError

13. What should we do with errors in the catch block that are not handled in this block?

- [ ] output to console
- [ ] rethrow
- [ ] ignore
- [ ] notify developer

14. What is the try...catch statement used for?

- [ ] allows to execute the code and if an error occurs, the script will stop its execution
- [ ] allows to execute the code and if an error occurs, the script will not stop its execution, and goes to the catch block, then the error can be handled outside this block
- [ ] allows to execute the code and if an error occurs, the script will not stop its execution, and goes to the catch block, where you can handle the error
- [ ] allows to execute the code and if an error occurs, the script will not stop its execution, and in the try block you can handle the error

15. Can a catch block be without an 'err' argument?

- [ ] yes, if we don’t need error details
- [ ] no, it's a syntax error
- [ ] yes, if there is no error in the try block

16. Can the finally block be used after the try block (without catch)?

- [ ] yes
- [ ] no

17. Select the native Error types:

- [ ] RangeError
- [ ] SyntaxError
- [ ] EvalError
- [ ] URIError
- [ ] AggregateError
- [ ] ReferenceError
- [ ] InternalError
- [ ] TypeError

18. Choose the ways to handle errors with promises:

- [ ] try...catch with async/await
- [ ] .catch() method
- [ ] .then() method

19. Select the correct statement regarding the finally block:

- [ ] will be executed only if there is no error occurs in the try block, after the try block
- [ ] will be executed only if there is no error occurs in the try block, after the catch block
- [ ] will be executed only if there is no catch block
- [ ] will be executed only if the catch block has not handled an error
- [ ] will be executed no matter if there is an error in try/catch or not

20. Will the finally block execute if there is a return in the try block?

- [ ] yes
- [ ] no
- [ ] it depends on the condition inside the try block

21. How many native error types exist in JS according to ECMAScript specification?

- [ ] 6
- [ ] 5
- [ ] 7
- [ ] 1
- [ ] more than 7

22. What is the correct order of blocks?

- [ ] try...catch
- [ ] catch...try
- [ ] finally...try
- [ ] try...finally
- [ ] try...catch...finally
- [ ] try...finally...catch
- [ ] try...catch...catch...finally

23. Select required parameters of the Error() constructor:

- [ ] message
- [ ] options
- [ ] cause
- [ ] fileName
- [ ] lineNumber
- [ ] no parameters required

24. Select the correct statements related to throw:

- [ ] ends function execution and specifies a value to be returned to the function caller
- [ ] throws a user-defined exception
- [ ] terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration
- [ ] catches the error and executes the code to handle it
- [ ] you may throw any expression, not just expressions of a specific type
- [ ] the statements after throw won't be executed
- [ ] the syntax forbids line terminators between the throw keyword and the expression to be thrown
- [ ] you may throw only Error object

25. Is it possible to handle syntactically incorrect code from a try block in a catch block?

- [ ] yes
- [ ] no
- [ ] depends on the syntax error

26. What is the difference between AggregateError and other types of errors?

- [ ] AggregateError is not a subclass of Error object
- [ ] AggregateError does not inherits instance properties from Error object
- [ ] AggregateError has a specific 'errors' property
- [ ] AggregateError is non-standard error
- [ ] differ only in name

27. Can we catch an exception with try...catch statement if it occurred in setTimeout()?

- [ ] yes
- [ ] no
- [ ] only if we put try...catch block inside the callback for setTimeout()

28. How is the try...catch...finally statement executed if there is a return in the finally block?

- [ ] if there is a return in the try block, it will be executed, and the return in the finally block will be ignored
- [ ] if there is a return in the catch block, it will be executed, and the return in the finally block will be ignored
- [ ] the return in the try and catch blocks are ignored, and return in the finally block will be executed
- [ ] the exceptions thrown inside of the catch block, and return in the finally block will be executed
- [ ] the exceptions thrown inside of the catch block are ignored, and return in the finally block will be executed

29. Is there a way (according to the specification) to respond to a fatal error that occurred outside the try...catch block and caused the script to crash?

- [ ] yes
- [ ] no

30. Is it required to have a finally block?

- [ ] yes
- [ ] no
- [ ] only if there is no catch block

31. Select the standard properties and methods of the Error prototype object:

- [ ] .constructor
- [ ] .name
- [ ] .stack
- [ ] .message
- [ ] .toString( )
- [ ] .fileName

32. Is it necessary to use the 'new' keyword to create a new Error object?

- [ ] yes
- [ ] no
- [ ] it's necessary only for custom errors

33. What type of error occurs when there are grammar mistakes in the code?

- [ ] ReferenceError
- [ ] TypeError
- [ ] URIError
- [ ] EvalError
- [ ] SyntaxError
- [ ] RangeError

34. Which of the following (depending on the set properties) can err.toString() return?

- [ ] `${err.name}`
- [ ] `${err.name}: ${err.message}`
- [ ] `${err.stack}`
- [ ] `${err.message}`
- [ ] `${err.name}: ${err.message}, ${err.lineNumber}`
- [ ] ''
- [ ] `${err.name}: ${err.message}, ${err.fileName}`

35. Will the catch block execute if no errors occurred in the try block?

- [ ] yes
- [ ] no
- [ ] depends on the code inside the catch block
