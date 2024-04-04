## Testing

#### Useful resources

[Theory](https://github.com/rolling-scopes-school/tasks/tree/master/stage2/modules/testing)

1. [Software Testing Fundamentals](https://testsigma.com/blog/fundamentals-of-software-testing/)
2. [The different types of software testing](https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing)
3. [What Is Software Testing? All the Basics You Need to Know](https://www.testim.io/blog/software-testing-basics/)
4. [Test-driven development (TDD) explained](https://circleci.com/blog/test-driven-development-tdd/)
5. [JavaScript testing](https://blog.logrocket.com/javascript-testing-best-practices/)
6. [JS Testing Tutorial](https://wanago.io/2018/08/27/testing-javascript-tutorial-types-of-tests-of-unit-testing-with-jest/)
7. []()
8. []()
9. []()

Software testing is the act of examining the artifacts and the behavior of the software under test by validation and verification.
In simpler terms, think of software testing as a quality check for software.

<details><summary>Why testing is needed:</summary>

1. `Quality Check.` it’s about ensuring it works perfectly every time you use it.
2. `Happy Users.` Remember the last time an app crashed on you? Annoying, right? Testing aims to prevent such frustrations.
3. `Saving Money.` Finding and fixing software issues early on is more cost-effective. More about the cost implications of errors in our guide on common [software testing mistakes](https://testsigma.com/blog/common-software-testing-mistakes-beginners-make-how-to-avoid/) beginners make and how to avoid them.
4. `Staying Safe.` You wouldn’t want software with security risks. Testing helps keep things safe and secure.
5. `Good Reputation.` When things work smoothly, it builds trust. And trust is everything in the digital world.
6. `Staying Updated.` To understand its current landscape and anticipate future challenges, staying updated with the latest trends is essential. Check out the [top software testing](https://testsigma.com/blog/top-software-testing-trends-to-look-out-for-in-2022/) trends to get a glimpse of what’s shaping the future of testing.

</details>

[Software testing strategy](https://testsigma.com/blog/software-testing-strategy/)

#### Objectives of Software Testing

1. `Ensure Reliability:` we test to ensure the software is dependable and won’t disappoint you when needed.
2. `Verify Functionality:` we verify that every feature functions as intended.
3. `Identify Defects:` testing helps spot and fix any issues or bugs in the software.
4. `Assess User Experience:` user-friendly software interface ensures a delightful digital journey
5. `Maintain Quality Standards:` the software has quality benchmarks it needs to meet.

#### Consequences of NOT performing Software Testing

1. `Frequent Breakdowns:` Untested software can crash or freeze, disrupting your tasks and causing frustration.
2. `Security Risks:` Without testing, the software might have vulnerabilities that hackers can exploit, putting your data at risk.
3. `Increased Costs:` Addressing software problems after release can be costlier than catching them during testing.
4. `Poor User Experience:` Untested software might have glitches or design flaws that make it hard to use.
5. `Damaged Reputation:` Buggy software can harm a company’s reputation and user trust.

#### Steps of Software Testing

1. `Requirement Analysis:` understanding what needs to be tested and the criteria it must meet.
2. `Test Planning:` this step involves organizing resources, setting timelines, and deciding on the testing tools and environment.
3. `Test Design:` creating detailed test cases, scripts, and procedures.
4. `Test Execution:` the actual tests are run on the software here.
5. `Result Analysis & Reporting:` after tests are run, results are analyzed, and any defects or issues are reported for fixing.

The `ISO 29119` standard set by the International Organization for Standardization (ISO) is our go-to recipe in software testing. It offers a detailed approach to software testing, covering everything from the basic concepts and definitions to the nitty-gritty of test processes, documentation, and techniques.

Software testability is the ease with which a software application can be tested to identify defects.

<details><summary>Testability Determining Factors:</summary>

1. `Control:` How easily can testers control the software’s operating conditions?
2. `Observability:` Can testers observe the outcomes of their tests?
3. `Stability:` Does the software behave consistently under the same conditions?
4. `Complexity:` Is the software’s structure and logic simple or intricate?
5. `Documentation:` Is there clear documentation available to guide the testing process?

</details>

#### Types of Software Testing

1. <details><summary>Manual Testing</summary>
   This is all about testers rolling up their sleeves and checking the software manually without any automation tools.
   </details>
2. <details><summary>Automation Testing</summary>
      Automation is essential in today’s fast-paced development cycles
   </details>
3. <details><summary>Performance Testing</summary>
      This tests how fast your software can run and how much load it can handle.
      Performance tests evaluate how a system performs under a particular workload. These tests help to measure the reliability, speed, scalability, and responsiveness of an application. For instance, a performance test can observe response times when executing a high number of requests, or determine how a system behaves with a significant amount of data. It can determine if an application meets performance requirements, locate bottlenecks, measure stability during peak traffic, and more. 
   </details>
4. <details><summary>Functional Testing</summary>
      Does the software do what it’s supposed to? This type checks if every function of the software works as intended.
      Functional tests focus on the business requirements of an application. They only verify the output of an action and do not check the intermediate states of the system when performing that action.
   </details>
5. <details><summary>Usability Testing</summary>
      Is the software easy and intuitive to use? This type ensures that the user experience is up to the mark.
   </details>
6. <details><summary>Security Testing</summary>
      This ensures no intruders can break into our software fortress, keeping user data safe and secure.
   </details>
7. <details><summary>Regression testing</summary>
      checks that recent code changes haven’t negatively affected existing features. It ensures new changes have kept existing functionality intact.
   </details>
8. <details><summary>Exploratory testing</summary>
      is an unscripted testing approach. Testers explore the application without predefined tests, discovering defects through a learn-as-you-go method.
   </details>
9. <details><summary>Smoke testing</summary>
      Smoke tests are basic tests that check the basic functionality of an application. They are meant to be quick to execute, and their goal is to give you the assurance that the major features of your system are working as expected.
   </details>

There are other testing types, such as integration, regression, acceptance, alpha & beta testing, and more. But the ones we’ve highlighted are some of the primary tools in our testing toolkit.

#### Approaches to Automated Software Testing: Traditional vs. Codeless

When it comes to automated software testing, there are two main ways to go about it:

`Traditional Coding Approach:` This is how testers write code to test software. Some popular tools for this are:

Selenium: Great for testing web apps supporting various languages
WebdriverIO: Another popular tool for web, mobile, and desktop automation.
Appium: Perfect for mobile automation.

`Codeless Testing:` As the name suggests, this approach doesn’t require traditional coding. Instead, it uses tools that allow testers to design and execute tests without writing scripts. One standout tool in this category is Testsigma. It offers a natural language-based approach, making automation testing seamless even for those without a coding background.

Both approaches have their merits. While the traditional method offers flexibility and control, the codeless process is more user-friendly and reduces the entry barrier for newcomers.

#### Levels of Software Testing

1. `Unit Testing:` individual components or units of the software are tested in isolation.
2. `Integration Testing:` Once individual units are tested, they are combined and tested as a group.
3. `System Testing:` The entire software system is tested as a whole.
4. `Acceptance Testing:` This is the final hurdle before the software is delivered to the client or end-users.

#### Seven principles of software testing

1. `Absence of Errors Fallacy:` A bug-free software might not necessarily meet user needs.
2. `Testing Shows Presence of Defects:` Testing can find defects but cannot guarantee their complete absence.
3. `Exhaustive Testing is Impossible:` It’s impractical to test every possible scenario due to constraints.
4. `Defect Clustering:` Most bugs might be found in just a few modules.
5. `Pesticide Paradox:` Running the same tests repeatedly might not uncover new bugs.
6. `Early Testing:` It’s beneficial to start the testing process early in development.
7. `Testing is Context-Dependent:` Different types of software require different testing approaches.

#### What’s the difference between black-box, white-box, and grey-box testing?

- Black-box testing: Tests software’s external behavior without considering its code.
- White-box testing: Tests software knowing its internal code.
- Grey-box testing: Combines both black-box and white-box with partial code knowledge.

#### Different types of tests

1. Unit tests
   Unit tests are very low level and close to the source of an application. They consist in testing individual methods and functions of the classes, components, or modules used by your software. Unit tests are generally quite cheap to automate and can run very quickly by a continuous integration server.

2. Integration tests
   Integration tests verify that different modules or services used by your application work well together. For example, it can be testing the interaction with the database or making sure that microservices work together as expected. These types of tests are more expensive to run as they require multiple parts of the application to be up and running.

3. Functional tests
   Functional tests focus on the business requirements of an application. They only verify the output of an action and do not check the intermediate states of the system when performing that action.

There is sometimes a confusion between integration tests and functional tests as they both require multiple components to interact with each other. The difference is that an integration test may simply verify that you can query the database while a functional test would expect to get a specific value from the database as defined by the product requirements.

4. End-to-end tests
   End-to-end testing replicates a user behavior with the software in a complete application environment. It verifies that various user flows work as expected and can be as simple as loading a web page or logging in or much more complex scenarios verifying email notifications, online payments, etc...

End-to-end tests are very useful, but they're expensive to perform and can be hard to maintain when they're automated. It is recommended to have a few key end-to-end tests and rely more on lower level types of testing (unit and integration tests) to be able to quickly identify breaking changes.

5. Acceptance testing
   Acceptance tests are formal tests that verify if a system satisfies business requirements. They require the entire application to be running while testing and focus on replicating user behaviors. But they can also go further and measure the performance of the system and reject changes if certain goals are not met.

6. Performance testing
   Performance tests evaluate how a system performs under a particular workload. These tests help to measure the reliability, speed, scalability, and responsiveness of an application. For instance, a performance test can observe response times when executing a high number of requests, or determine how a system behaves with a significant amount of data. It can determine if an application meets performance requirements, locate bottlenecks, measure stability during peak traffic, and more.

7. Smoke testing
   Smoke tests are basic tests that check the basic functionality of an application. They are meant to be quick to execute, and their goal is to give you the assurance that the major features of your system are working as expected.

Smoke tests can be useful right after a new build is made to decide whether or not you can run more expensive tests, or right after a deployment to make sure that they application is running properly in the newly deployed environment.
