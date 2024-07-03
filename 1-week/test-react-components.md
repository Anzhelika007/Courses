1. What is the primary purpose of the shouldComponentUpdate method? - 100%

- [ ] To control the initial rendering of a component.
- [ ] To force a component to re-render.
- [x] To skip unnecessary re-renders by comparing current props and state with next props and state
- [ ] To trigger child component re-renders

2. Which lifecycle method should be used to cancel any subscriptions or requests made in componentDidMount?

- [x] componentWillUnmount
- [ ] componentDidUpdate
- [ ] shouldComponentUpdate
- [ ] componentWillUpdate

3. Which method is the only required method in a class component?

- [x] render
- [ ] constructor
- [ ] componentDidMount
- [ ] componentDidUpdate
- [ ] componentWillUnmount

4. Is it possible to migrate any class component into a functional component? ----&

- [ ] Yes, it's always possible to migrate any class component into a functional component.
- [ ] No, it's not possible to migrate class components that rely heavily on state and lifecycle methods.
- [x] Yes, it's possible, but with some exceptions.

5. What is the recommended approach for defining React components as of the latest best practices?

- [ ] Defining components as JavaScript classes.
- [x] Defining components as functions.
- [ ] Mixing both JavaScript classes and functions.
- [ ] Using only class components for new code.

6. Which of the following cannot be implemented/replaced using functional components?

- [ ] PureComponent
- [ ] Lifecycle methods
- [ ] createRef function
- [x] Error boundary
- [ ] All of the above
- [ ] None of the above

7. Which of these ways of declaring class components are valid?

- [ ] function Button()
- [ ] <Button />
- [x] class Button extends Component
- [x] class Button extends PureComponent

8. Is it a good idea to update the state in the 'render' method?

- [ ] Yes, it's a valid practice and is commonly used to handle dynamic UI updates.
- [ ] Updating the state in the render method is optional, and it depends on the specific requirements of the component.
- [x] No, because it may lead to an infinite loop of rendering.

9. What is the suggested approach for migrating from class components to function components?

- [ ] There is no way to migrate, you must rewrite everything from scratch.
- [ ] Rewrite the entire application at once.
- [x] Gradually refactor class components into function components.
- [ ] Use a third-party library for migration.

10. Is setState() a synchronous or asynchronous method?

- [ ] Synchronous.
- [x] Asynchronous.
- [ ] Both synchronous and asynchronous.

11. Is it possible to avoid method binding in the constructor?

- [x] Yes, you can use public class fields syntax.
- [x] Yes, you can use arrow functions in callbacks.
- [ ] No, it's a required step in class components.
- [ ] Method binding in the constructor is only necessary for functional components, not class components.

12. How to properly implement method binding for a newly defined class method handleClick()?

- [x] this.handleClick = this.handleClick.bind(this)
- [ ] this.handleClick.bind()
- [ ] props.bind(handleClick)
- [ ] this.handleClick.bind(this)

13. In what situations would you typically use the componentDidMount method?

- [ ] To define the component's initial state.
- [x] To handle HTTP requests and set up subscriptions.
- [ ] To update the component's props.
- [ ] To trigger a re-render of the component.

14. How to increment the value of the 'count' state prop by 1 in class components?

- [ ] this.state.count = this.state.count + 1
- [x] this.setState({ count: this.state.count + 1 })
- [ ] this.state.count++
- [x] this.setState((prevState) => ({ count: prevState.count + 1}))

15. Is it allowed to directly modify props inside a React component?

- [ ] Yes, absolutely.
- [ ] Yes, only in some situations.
- [x] No, not in any circumstances.

16. What is the main difference between PureComponent and Component?

- [ ] PureComponent is a functional component, while Component is a class component.
- [x] PureComponent skips re-renders for same props and state, while Component always re-renders.
- [ ] PureComponent can only be used in modern React applications, whereas Component is for legacy projects.
- [ ] PureComponent has a different lifecycle compared to Component.

17. In what cases do you need to use 'super(props)' inside the constructor?----&

- [x] If you want to get access to this.props in the constructor.
- [ ] In cases your component uses props.
- [ ] Always when a constructor is declared in the class.-----&

18. Why in some cases it may be needed to pass a function instead of an object to setState?

- [ ] Because it provides better encapsulation.
- [ ] To prevent the state object from mutating.
- [x] To access the current value from the state.
- [ ] Because it automatically updates a component.
