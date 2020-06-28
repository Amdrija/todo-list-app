# To Do List App

This is an app to manage your to do lists. You can visit it here: https://amdrija.github.io/todo-list-app/.

## Features

You can group group todos into projects. With each todo you can choose its title, description, priority and due date.
Based on priority, the todos will have a different color:  
```diff
 - - Red for high priority  
 - ! Yellow for medium priority
 - + Green for low priority
 ```

The app uses local storage to store your todos, so you won't lose them when you referesh the page. *If you clear cookies you will lose your todos."

## How it's made

The app was made primararly using Vue.js for functionality and Materialize css for styling. It should be mobile-friendly as well, however, it was built with desktop in mind. This is my first Vue app, so it probably has mistakes and bugs.  
It probably should have been made differently than what I did. I essentially passed down the "project storage" variable to different components, and different components have different responsibilities for updating the UI and "project storage". This resulted in me having to use $forceUpdate() on many different places, because Vue couldn't detect that the variables have changed.  
What I think I should have done instead was that everytime component wanted to change "project storage" it should have $emit the event to the root App. Then the app handles the change, which Vue can now detect and Vue updates UI by itself, without $forceUpdate(). Now, I could be wrong about this as well, but from my understaing and what I read, this is how it was supposed to be made.  
I will probably just continue learning by building something else and see if I understood it or not.