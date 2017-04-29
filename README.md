# Homework #2

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* arrow functions
	    >An arrow function is a way of creating a function that uses less lines of code
	* state
	    >If a function or class needs to remember something that has happened then the function is called stateful. A state is one of the things a function or class remebers. So if a dog is hungry the dog will look for food. Onc ethe dog is fed the state will change to not hungry and the dog won't look for food.
	* constructor
	    >A constructor is a function that sets up a framework of what other functions will have if new functions are made from the constructor. So if you have a dog, that dog is going to bark. You can create a bark constructor and then for each unqiue dog you can create a new bark then say the bark is high pitch or low pitch.
	* setState - setState with a callback function and setState with an object passed in
	    >setState will change what the class remembers and then makes react change the website to what the new state is. Sending a object though setState will change what the value of the state key is and sending a callback function will set the state to whatever the callback function returns.
	* .bind
	    >.bind is a way of saying to a function that you should use whatever you pass to that bind as the arguement
	* functional components vs class components
	    >A functional component is simple to make and doesn't have to add to react components whereas a class component adds to react components
  	* onClick
  	    >A onClick is a react function that detects clicks from the user on elements in a webpage.


2. Fork and clone this repo.  When you need to commit use the following commands.
		
	* Run: `npm install -g create-react-app`
	* Create a boilerplate React app called clock. `create-react-app clock`
	* Navigate into /clock and run the command: `npm start`
	* Your `<App />` component will render a `<NavBar />` and a `<Clock />` component.
	* Create a file called `NavBar.js` and a file called `Clock.js`
	* `<NavBar />` and `<Clock />` will both be React components.  `<NavBar />` should display the title of your page in a larger font.
	* `<Clock />` will display a clock that updates every second.  (You will need to use the `Date` object.)
  	* `Date` example: `const now = new Date(); now.getHours(); now.getDay(); now.getMinutes(); now.getSeconds(); etc.`
	* Create a clock that updates every second. JavaScript's `setInterval(cb, miliseconds)` function allows you to specify code that runs after a set time.
	* Style `<Clock />` and try to make it look nice.



#### Congratulations on finishing Homework #2!

For more information about our other courses visit: https://www.lambdaschool.com
