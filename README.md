# YouCode Canteen Menu Manager 🍽️

A simple web application to manage the YouCode canteen menu from Monday to Friday.

- Live site (Vercel): https://b3-canteen.vercel.app
- Repository: https://github.com/jamal7-codes/b-Cantina-3

## Technologies

- HTML5 and Tailwind CSS (CDN)
- Vanilla JavaScript (ES6): DOM manipulation, events, localStorage
- Git, GitHub and Vercel

## What the app does

- Shows recipes as cards in a **recipe reserve**. The cards are created from a JavaScript array.
- Lets the user **add a recipe** with a modal form (name, category, price).
- Lets the user **assign a recipe to a day and slot** with a dropdown on each card. A recipe can only be placed in the slot that matches its category (a Starter cannot go in the Dessert slot).
- Shows the **weekly menu** (Monday to Friday, three slots per day) and the **total of each day**.
- Lets the user **edit** a recipe (the form opens filled with its values) and **delete** it (with a confirmation).
- Shows a **dashboard** with the number of recipes in the reserve and the cost of the week.
- Shows **toast messages** after actions, with a button to close them.
- **Saves the data** in the browser (localStorage), so it stays after a refresh.
- The modal closes with the Cancel button or a click on the dark background. A click inside the white box does not close it.

## Project structure

```
index.html        page structure
style.css         custom styles
script.js         all the JavaScript
README.md         this file
Documentation.md  explanation of the code
Planning.md       task planning
```

## Run it locally

Open `index.html` in a browser (an internet connection is needed for the Tailwind CDN). To reset the saved data, run `localStorage.clear()` in the console and refresh.

 
