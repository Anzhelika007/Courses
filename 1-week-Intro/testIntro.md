1. In an Angular application, where do you usually define TypeScript type definitions for external libraries that do not have their own '@types' packages?

- [ ] Within the main 'app.module.ts' file.
- [ ] Directly in the 'package.json' file.
- [x] In a custom 'typings.d.ts' file.
- [ ] Inside the 'vendor.ts' file.

2. When to use 'ngOnInit' in TypeScript for Angular components?

- [ ] To initialize the component before property settings.
- [ ] When you need to handle async operations upon component destruction.
- [x] When you need to run code after the component's properties have been set.
- [ ] To define event listeners for the component.

3. Which file in an Angular project specifies the TypeScript compiler options?

- [x] tsconfig.json
- [ ] typescript.json
- [ ] compiler.config.json
- [ ] tsconfig.app.json

4. What is the purpose of the 'never' type in TypeScript?

- [ ] Represents a value that should be ignored.
- [x] Represents a value that will never occur.
- [ ] Represents a value that will never be changed.
- [ ] Represents a value that is always false.

5. How can you use Angular CLI to add a new feature or library to your Angular project, like Angular Material?

- [ ] ng add angular/material
- [x] ng add @angular/material
- [ ] ng generate library @angular/material
- [ ] ng init @angular/material

6. How do you define a function that returns a Promise with a specific type in TypeScript?

- [ ] async function fetchData(): DataType {}
- [ ] function fetchData(): Promise DataType {}
- [x] function fetchData(): Promise<DataType> {}
- [ ] async function fetchData() => DataType {}

7. What is the command for creating a new Angular application using Angular CLI?

- [x] ng new my-app
- [ ] ng generate my-app
- [ ] ng create my-app
- [ ] ng init my-app

8. How do you specify that a function in TypeScript accepts a rest parameter?

- [x]function myFunc(...args: number[]) {}
- [ ]function myFunc(args: number\*[]) {}
- [ ]function myFunc(args: ...number[]) {}
- [ ]function myFunc(args: number[]...) {}

9. Which TypeScript feature allows for defining an array of objects with specific property types?

- [x] Typed array
- [ ] Generics
- [ ] Enums
- [ ] Function overloading

10. Which of the following is not valid for defining tuple types in TypeScript for an Angular application?

- [ ] type MyTuple = number & string;
- [x] type MyTuple = [number, string];
- [ ] let myTuple: [number, string];
- [ ] let myTuple: number | string[];

11. Which command would you use to create a new TypeScript configuration file in an existing Angular project?

- [x] tsc --init
- [ ] ng generate tsconfig
- [ ] tsconfig --new
- [ ] typescript --config

12. How can you enable the Ahead-of-Time (AOT) compilation for an Angular application?

- [x] By setting 'aot' to true in the angular.json file.
- [ ] Using the command 'ng build --prod'.
- [ ] Installing the AOT plugin for Angular CLI.
- [ ] By adding '@AotEnabled' decorator to the main component.

13. In TypeScript, when using classes, how do you declare a method that is available on the class itself instead of the class instances?

- [x] private methodName() {}
- [ ] static methodName() {}
- [ ] className.methodName() {}
- [ ] function methodName() {}

14. How do you define a model in TypeScript for use in Angular?

- [x] By creating a class or an interface.
- [ ] Using the 'model' keyword.
- [ ] By declaring a JSON object.
- [ ] Using the '@model' decorator.

15. What is the primary configuration file for an Angular project?

- [x] angular.json
- [ ] package.json
- [ ] tsconfig.json
- [ ] webpack.config.js

result 80%
