# SpendWise

SpendWise is an interactive personal budgeting dashboard that helps users track expenses, monitor their spending, and understand how much money remains from their monthly budget.

The project has developed from a static HTML and CSS dashboard into an interactive JavaScript application.

## Week 6 Improvements

This week, SpendWise was improved by adding JavaScript functionality that allows users to interact with the dashboard.

The main improvements include:

* Adding expenses through a form.
* Storing multiple expenses in an array.
* Using conditional statements to make budgeting decisions.
* Using loops to process expense records.
* Updating the dashboard dynamically using the DOM.
* Adding event listeners for user interactions.
* Displaying expenses directly on the webpage.
* Adding the ability to delete expenses.
* Updating category totals automatically.
* Updating the remaining budget automatically.

## 1. Decision Making with Conditionals

Conditional statements are used to evaluate the user's financial situation.

For example, SpendWise checks the remaining balance:

```javascript
if (remainingBalance > 0) {
    budgetStatus.textContent =
        "You are within your budget.";
} else if (remainingBalance === 0) {
    budgetStatus.textContent =
        "You have used your entire budget.";
} else {
    budgetStatus.textContent =
        "You have exceeded your budget.";
}
```

Conditionals are also used when validating user input and determining whether expense information is valid.

## 2. Arrays for Multiple Records

SpendWise uses an array called `expenses` to store multiple expense records.

```javascript
let expenses = [];
```

When the user adds an expense, an object is created and added to the array:

```javascript
const newExpense = {
    name: name,
    amount: amount,
    category: category
};

expenses.push(newExpense);
```

This allows the application to manage many expenses instead of storing each expense in a separate variable.

## 3. Processing Data with Loops

Loops are used to process the stored expense records.

For example:

```javascript
expenses.forEach(function(expense) {
    total += expense.amount;
});
```

The loop goes through every expense in the array and adds the expense amount to calculate the total spending.

Loops are also used when calculating totals for individual categories.

## 4. DOM Manipulation

The Document Object Model (DOM) is used to update the webpage dynamically.

SpendWise selects HTML elements using:

```javascript
const spentDisplay =
    document.getElementById("spent-display");
```

The content of the element can then be changed using:

```javascript
spentDisplay.textContent =
    "KES " + totalExpenses.toLocaleString();
```

This means the user can see updated financial information directly on the webpage without refreshing the page.

The expense list is also created dynamically using:

```javascript
document.createElement("div");
```

and:

```javascript
expenseList.appendChild(expenseItem);
```

## 5. User Interactions and Events

SpendWise uses event listeners to respond to user actions.

The expense form listens for the `submit` event:

```javascript
expenseForm.addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        // Process expense
    }
);
```

When the user submits the form:

1. JavaScript collects the input.
2. The input is validated.
3. An expense object is created.
4. The object is added to the expenses array.
5. The dashboard is updated.
6. The expense appears in Recent Activity.

Delete buttons also use click events to remove expenses from the array.

## 6. Connecting Everything Together

The application follows this basic flow:

```text
User enters expense
        ↓
Form submit event
        ↓
JavaScript collects input
        ↓
Input validation
        ↓
Expense object created
        ↓
Expense added to array
        ↓
Loops process expense data
        ↓
Budget calculations are performed
        ↓
DOM is updated
        ↓
User sees new dashboard information
```

This demonstrates how JavaScript connects user actions, application data, calculations, and webpage updates.

## Features

### Add Expense

Users can enter:

* Expense name
* Amount
* Category

The expense is then added to the dashboard.

### Delete Expense

Users can remove an expense by clicking the Delete button.

### Budget Tracking

SpendWise automatically calculates:

* Monthly budget
* Total spending
* Remaining balance

### Category Tracking

Expenses are grouped into:

* Food
* Transport
* Rent
* Entertainment
* Savings
* Utilities

The category totals are updated dynamically.

### Budget Status

SpendWise provides feedback depending on the remaining balance:

* Within budget
* Budget fully used
* Budget exceeded

## Challenges Encountered

One challenge was connecting the expense data stored in JavaScript to the visible dashboard.

The solution was to use DOM manipulation. After the expense array changes, functions such as `displayExpenses()`, `updateBudgetSummary()`, and `updateCategoryTotals()` are called to refresh the information shown on the page.

Another challenge was handling multiple expenses. Instead of creating separate variables for each expense, an array was used to store expense objects. Loops can then process all records efficiently.

Input validation was also important because invalid amounts or missing information could cause incorrect calculations. Conditional statements were used to check the user's input before adding an expense.

## Testing

The following functionality should be tested:

1. Add an expense with valid information.
2. Confirm the expense appears in Recent Activity.
3. Add multiple expenses.
4. Confirm Total Spent increases.
5. Confirm Remaining Balance decreases.
6. Add expenses from different categories.
7. Confirm category totals update.
8. Delete an expense.
9. Confirm the totals decrease after deletion.
10. Try submitting an empty form.
11. Try entering an invalid amount.
12. Confirm appropriate feedback is displayed.

## Project Structure

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Google Fonts

## Submission

Before submitting the project:

1. Complete all assignment requirements.
2. Test all functionality.
3. Push the updated project to GitHub.
4. Ensure the repository is public.
5. Copy the GitHub repository URL.
6. Submit the GitHub repository link through the LMS.
