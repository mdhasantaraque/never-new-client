import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-gray-200 py-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-700">
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              No.1- What are the different ways to manage a state in a React
              application?
            </p>
            <p className="mt-2">
              Data management is very hard. And as an application grows and
              evolves, it's essential to have a strategy in place to manage
              data. Whatever state management library is used, a robust
              application well-architected and thoroughly designed can make a
              massive difference in the developers' productivity. <br />
              Thanks to the development of React and new libraries, Redux isn't
              the only choice anymore. New libraries and technologies are
              available to simplify the way of managing data and application
              states. <br />
              <span className="text-xl font-bold">
                Server state or API data
              </span>
              (Store globally):That's probably the primary type of data most
              developers have to deal with. Fetching and updating server data
              happens all the time. To cache the data at the front-end
              application level, we want to store this at a global level. While
              some data might not be used by the entire app, separating the data
              layer is desired to simplify any application's growth and
              evolution. <br />
              <span className="text-xl font-bold">
                Form data or user entry data
              </span>
              (Store locally):Storing form data is pretty standard for many
              applications. A form is usually a small part of an app that
              collects user data. However, there is often no reason to share
              this data at the global level of any application. Keeping this
              data at the local level makes more sense, even if the form goes
              through multiple screens. <br />
              <span className="text-xl font-bold">Navigation state</span>
              (Store globally):Navigation-related states, such as knowing the
              screen currently visible, or the parameters available, are
              something an application might need to access from anywhere.
              However, managing this type of data ourselves can be complicated
              and probably not a good idea. <br />
              <span className="text-xl font-bold">Components state</span>
              (Store locally):There are times when it's needed to share a
              component state with another component. For example, a music
              player that shares the “Play” state with different components to
              display information or create animations. <br />
              Many more state we handle through like:
              <span className="text-xl font-bold">
                Modal view or similar types of global components state (Store
                globally), User preferences or user session data (Store locally
                or globally),Configs and feature flags (Store globally) etc..
              </span>
            </p>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto my-5 rounded-lg shadow-sm dark:bg-gray-700">
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              No.2- How does prototypical inheritance work?
            </p>
            <p className="mt-2">
              Everything in Javascript is an object. Even when creating a Class
              is an Object via an Object Literal or Constructor Function. This
              is how Javascript does class-based programming as to other
              traditional Object-Oriented Programming languages where they use
              the keyword 'class' and 'inheritance'.
              <br />
              Javascript's version of class-based programming and other
              traditional class-based programming languages work with the same
              concept but does not work exactly similar. There are differences
              in its keyword, syntax, and how it works. There are also debates
              regarding pros and cons of Javascript's version of class-based
              programming, but for simplicity's sake and learning purposes, I do
              not want to go over those issues. See details here
              <br />
              So, the core idea of Prototypal Inheritance is that an object can
              point to another object and inherit all its properties. The main
              purpose is to allow multiple instances of an object to share
              common properties, hence, the Singleton Pattern. <br />
            </p>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto my-5 rounded-lg shadow-sm dark:bg-gray-700">
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              No.3- What is a unit test? Why should we write unit tests?
            </p>
            <p className="mt-2">
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
              <br />
              Unit testing ensures that all code meets quality standards before
              it's deployed. This ensures a reliable engineering environment
              where quality is paramount. Over the course of the product
              development life cycle, unit testing saves time and money, and
              helps developers write better code, more efficiently. <br />
              Unit tests save time and money. Usually, we tend to test the happy
              path more than the unhappy path. If you release such an app
              without thorough testing, you would have to keep fixing issues
              raised by your potential users. <br />
              Well-written unit tests act as documentation for your code. Any
              developer can quickly look at your tests and know the purpose of
              your functions. <br />
              It simplifies the debugging process. <br />
              Unit testing is an integral part of extreme programming. Extreme
              programming is basically a
              “test-everything-that-can-possibly-break” programming strategy.
              <br />
              Unit testing improves code coverage. A debatable topic is to have
              100% code coverage across your application.
              <br />
              Unit tests make code reuse easier. If you want to reuse existing
              code in a new project, you can simply migrate both the code and
              tests to your new project, then run your tests to make sure you
              have the desired results.
            </p>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto my-5 rounded-lg shadow-sm dark:bg-gray-700">
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              No.4- React vs. Angular vs. Vue?
            </p>
            <p className="mt-2">
              There are three frameworks for building web applications that
              every frontend developer has heard about: React, Vue.js, and
              Angular.
              <br />
              React is a UI library, Angular is a fully-fledged front-end
              framework, while Vue.js is a progressive framework.
              <br />
              They can be used almost interchangeably to build front-end
              applications, but they're not 100 percent the same, so it makes
              sense to compare them and understand their differences.
              <br />
              <span className="text-xl font-bold">Angular</span>
              <br />
              1. Allows MVC architecture. <br />
              2. Good maintainability. <br />
              3. Web applications built with Angular perform very well.
              <br />
              4. Angular lets you manage microfrontend architecture
              <br />
              5. Projects may now be developed, expanded, and generated more
              quickly thanks to technologies like the Angular-CLI command-line
              tool.
              <br /> 6.Angular provides a basic framework for developing web
              applications and manages them without additional libraries.
              <br /> 7.Easy unit and end-to-end testing.
            </p>
            <p>
              <span className="text-xl font-bold">React</span>
              <br />
              1. It is just a JavaScript library, not a framework. <br />
              2. Fast loading of new data.
              <br />
              3. One file contains both markup and logic (JSX).
              <br />
              4. Enables the separation of data and presentation.
              <br />
              5. It's simple to get started and doesn't take much practice.
              <br />
              6. As a library, it doesn't have that many presets, so it's easy
              to learn.
              <br />
              7. Smooth work of the app, even with complex underlying operations
              or database queries.
            </p>
            <p>
              <span className="text-xl font-bold">Vue</span>
              <br />
              1. A list of tools and libraries (Vue.js official CLI, Development
              Tools, Vue Loader, Vue Router).
              <br />
              2. Flexibility and simplicity in the utilization.
              <br />
              3. Thorough documentation.
              <br />
              4. Reusable in the terms of adding numerous reactive components to
              the existing code.
              <br />
              5. The possibility of Component-Based Architecture (CBA)
              <br />
              6. Limited community comparing to Angular and React.
              <br />
              7. The number of available plugins
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
