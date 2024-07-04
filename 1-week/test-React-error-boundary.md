1. What happens if you do not use Error Boundary in React?

- [ ] Unhandled errors would cause the entire component tree to unmount
- [ ] React app would become a lot faster
- [ ] The component where the error occurred would be unmounted
- [ ] React app would crash immediately when an error occurs

2. Which lifecycle methods are necessary to define in a component for it to be a valid Error Boundary?

- [ ] componentDidCatch
- [ ] getDerivedStateFromError
- [ ] both 1 and 2
- [ ] none of the above

3. How does Error Boundary affect the performance of a React application?

- [ ] Error Boundary has a significant impact on performance due to the need to catch errors
- [ ] Error Boundary does not have any significant impact on performance
- [ ] Error Boundary could improve performance by preventing complete app crash
- [ ] Performance is directly proportional to the number of Error Boundaries

4. Where in the component tree should an Error Boundary be inserted?

- [ ] At the root level
- [ ] Around individual components
- [ ] Both
- [ ] None of the above

5. Can Error boundaries catch errors in itself?

- [ ] Yes
- [ ] No

6. Which of the following is true about Error boundaries?

- [ ] Error boundaries do not catch errors for server side rendering
- [ ] Error boundaries catch errors for both render and lifecycle methods
- [ ] Error boundaries allow you to manage and handle errors gracefully
- [ ] All of the above

7. What is the standard behavior for an Error Boundary?

- [ ] If an error occurs it will unmount and remount its child components
- [ ] If an error occurs its child components will not be updated
- [ ] Both A and B
- [ ] None of the above

8. Error boundaries do not catch errors inside \***\*\_\_\_\_\*\***

- [ ] Event handlers
- [ ] Asynchronous code
- [ ] Both
- [ ] None of the above

9. Can Error Boundary work on server-side rendering?

- [ ] Yes, Error Boundary works both on the client-side and server-side
- [ ] No, Error Boundary only works on client-side rendering
- [ ] Yes, but it requires additional libraries to work on the server-side
- [ ] No, on the server-side, there is a different error handling mechanism

10. How do you create an Error Boundary in React?

- [ ] By throwing JavaScript errors in the component
- [ ] By declaring a new class component that extends React.Component and adding componentDidCatch() method
- [ ] By using useState and useEffect hooks
- [ ] By using the axios library to catch HTTP errors

11. When should you use Error Boundaries?

- [ ] During development
- [ ] In production
- [ ] Both
- [ ] Never

12. What is componentDidCatch and how is it used in Error Boundary?

- [ ] componentDidCatch is a lifecycle method that catches errors that occur in a component’s children
- [ ] componentDidCatch is a method used to catch API errors
- [ ] componentDidCatch is a method that catches errors after a component has been unmounted
- [ ] componentDidCatch is a lifecycle method that catches errors during the mounting phase of a component

13. What is a React Error Boundary?

- [ ] A React component that catches JavaScript errors anywhere in their child component tree
- [ ] A method to catch runtime errors
- [ ] A type of React component error
- [ ] A JavaScript error handling mechanism

14. What are the limitations of using Error Boundary in React?

- [ ] They do not catch errors for event handlers, asynchronous code, server-side rendering and errors thrown in the error boundary itself
- [ ] They only catch errors from class components, not functional components
- [ ] They only work when the app is in development mode
- [ ] They do not catch errors in the render method of the same component
