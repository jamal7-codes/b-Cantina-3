# YouCode Canteen Menu Manager 🍽️

A web application for managing the YouCode canteen menu from Monday to Friday, with a maximum daily budget of **50 DH per learner**.

- **Live Demo:** https://b3-canteen.vercel.app
- **GitHub Repository:** https://github.com/jamal7-codes/b-Cantina-3

## 1. Project Overview

The YouCode Canteen Menu Manager helps organize weekly meals, manage recipes, and follow the cost of each day.

The application includes five days, from Monday to Friday, with three meal categories per day: Starter, Main Course, and Dessert.

## 2. Project Objectives

- Manage a reserve of recipes.
- Plan meals for the entire week.
- Assign recipes to the correct day and meal category.
- Keep daily spending within the 50 DH budget.
- Display useful statistics through a dashboard.
- Provide a simple, responsive user interface.

## 3. Technologies Used

- **HTML5:** Page structure.
- **Tailwind CSS:** Styling and responsive design.
- **Vanilla JavaScript (ES6):** DOM manipulation, events, and application logic.
- **localStorage:** Saves the recipes in the browser, so the data stays after a refresh.
- **Git and GitHub:** Version control and source code management.
- **Vercel:** Application deployment.

## 4. Main Features

### Recipe Management
- Display recipes as cards in the recipe reserve (the cards are created from a JavaScript array).
- Add recipes using a modal form.
- Check that the fields are filled and that the price is above 0.
- Edit and delete recipes.

### Weekly Menu Management
- Organize meals from Monday to Friday.
- Provide three meal slots per day: Starter, Main Course, and Dessert.
- Assign recipes with a dropdown on each recipe card. A recipe can only go in the slot that matches its category.
- Calculate and display each day's total cost out of 50 DH.

### Dashboard
- Display the number of recipes in the reserve.
- Display the cost of the week (sum of the assigned recipes).

### User Feedback
- Show toast notifications after actions, with a button to close them.
- Ask for confirmation before deleting a recipe.
- The recipe modal closes with the Cancel button or with a click on the dark background. A click inside the white box does not close it.

## 5. Business Rules

| Rule | Status in the app |
|---|---|
| The weekly menu covers Monday through Friday | Done |
| Each day has three slots: Starter, Main Course, Dessert | Done |
| A recipe must match the category of its slot | Done |
| The daily total must not exceed 50 DH | Partly done: checked when editing an assigned recipe, not yet when assigning from the dropdown |
| Only one recipe per day and slot | Not done |
| A recipe must be back in the reserve before editing | Not done: an assigned recipe can be edited, and the budget is checked |
| Invalid recipe information must not be saved | Partly done: empty fields and prices of 0 or less are refused |

## 6. Project Structure

```text
b-Cantina-3/
├── index.html
├── style.css
├── script.js
├── README.md
```

## 7. Installation and Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/jamal7-codes/b-Cantina-3.git
   ```

2. Open the project folder.
3. Open `index.html` in your browser. An internet connection is needed for the Tailwind CSS CDN.
4. To reset the saved data, run `localStorage.clear()` in the browser console and refresh.

## 8. How to Test

1. Add a recipe with valid values. A card should appear in the reserve.
2. Try to save with an empty field or a price of 0. A message should appear and the recipe should not be added.
3. Assign a recipe to a day with the dropdown, then try a wrong category slot. The wrong slot should be refused.
4. Check that the day total and the dashboard numbers change.
5. Edit a recipe, then delete one (a confirmation appears).
6. Refresh the page. The data should still be there.

## 9. Key Technical Points

- **Data and display:** the `recipes` array holds all the data, and the page is redrawn from it after every change.
- **One object becomes one card:** a loop creates the card elements for each recipe and adds them to the page.
- **Assigning:** the dropdown value looks like `"Tuesday|Main course"`. It is split into a day and a slot, and saved in `recipe.day` and `recipe.slot`.
- **Event delegation:** one listener on the reserve handles the dropdowns, Edit and Delete for all cards.
- **Persistence:** `JSON.stringify` and `JSON.parse` save and load the array in localStorage.

 

The YouCode Canteen Menu Manager combines HTML, Tailwind CSS, and JavaScript to plan a weekly menu from a reserve of recipes. The core of the app works, and the missing parts are listed above.
