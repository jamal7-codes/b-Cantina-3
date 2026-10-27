# YouCode Canteen Menu Manager 🍽️

A web application built with HTML, Tailwind CSS, and Vanilla JavaScript to manage the YouCode canteen menu from Monday to Friday while respecting a maximum budget of **50 DH per day**.

- **Live website:** https://b3-canteen.vercel.app
- **GitHub repository:** https://github.com/jamal7-codes/b-Cantina-3

## Technologies

- HTML5
- Tailwind CSS via CDN
- Vanilla JavaScript (ES6)
- DOM manipulation and event handling
- Git and GitHub
- Vercel

## Features

- **Recipe reserve:** Display recipes dynamically from a JavaScript array.
- **Add recipes:** Open a modal form to enter the recipe name, category, and price.
- **Recipe assignment:** Assign recipes to a weekday and a menu slot using a dropdown.
- **Category validation:** Only allow recipes to be assigned to a matching slot.
- **Weekly menu:** Display the menu from Monday to Friday, with Starter, Main course, and Dessert slots.
- **Daily budget:** Calculate each day's total and prevent the total from exceeding 50 DH.
- **Edit and delete:** Update recipes according to the project rules and confirm before deleting.
- **Dashboard:** Display the number of recipes in reserve, days ready, weekly cost per learner, and vegetarian-diet status, if implemented.
- **Toast messages:** Show feedback after user actions.
- **Form validation:** Validate recipe information before saving.
- **Data persistence:** Save recipes in localStorage so they remain after refreshing the page, if enabled in the final version.

## Project structure

```text
index.html
style.css
script.js
README.md
Documentation.md
Planning.md
```

## Run locally

1. Clone or download the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in your browser or use the Live Server extension.
4. An internet connection is required for the Tailwind CSS CDN.

If localStorage is enabled and you want to reset the saved application data, open the browser console and run:

```js
localStorage.clear();
```

Then refresh the page.

## Documentation

- **Task planning:** See `Planning.md`.
- **Final documentation:** See `Documentation.md`.

## Project objective

The goal of this project is to practice DOM manipulation, JavaScript events, form validation, algorithmic thinking, responsive design, and Git-based project organization while developing a practical canteen menu management application.
