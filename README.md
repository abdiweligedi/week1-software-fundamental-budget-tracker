# SpendWise

SpendWise is a personal budgeting dashboard designed to help users understand their monthly budget, expenses, and remaining balance.

The project started as a visual dashboard using HTML and CSS. JavaScript has now been introduced to make the application capable of collecting user information, processing financial data, performing calculations, and displaying results.

## JavaScript Foundation

This week's assignment introduces the JavaScript foundation of SpendWise.

The project demonstrates:

* JavaScript variables
* Data types
* User input
* Number conversion
* Arrays and objects
* Arithmetic calculations
* Conditional statements
* Reusable functions
* Browser console output
* Linking an external JavaScript file to HTML

## 1. JavaScript Setup

SpendWise uses an external JavaScript file called `script.js`.

The JavaScript file is connected to `index.html` using:

```html
<script src="script.js"></script>
```

The script is placed at the bottom of the HTML document so that the webpage content loads before the JavaScript runs.

## 2. Application Data

JavaScript variables are used to store important budgeting information.

Examples include:

```javascript
let budget = 50000;
let totalExpenses = 0;
let expenseCount = 0;
let expenses = [];
```

The variables store the monthly budget, total expenses, number of expense records, and expense-related data.

The `expenses` array contains objects representing expense information.

## 3. User Input

SpendWise collects budgeting information using JavaScript `prompt()` dialogs.

The user is asked to enter:

1. Their monthly budget.
2. The amount they have already spent.

Example:

```javascript
let userBudget = prompt(
    "Welcome to SpendWise!\n\nEnter your monthly budget:"
);
```

The input is converted from text into a number using `Number()` before calculations are performed.

## 4. Budget Calculations

SpendWise calculates the user's remaining balance using:

```text
Remaining Balance = Budget - Total Expenses
```

For example:

```javascript
let remainingBalance = calculateRemainingBalance(
    budget,
    totalExpenses
);
```

The application also calculates the percentage of the budget that has been spent.

## 5. Reusable Functions

Functions are used to organize the budgeting logic and make calculations reusable.

### Remaining Balance

```javascript
function calculateRemainingBalance(budgetAmount, expensesAmount) {
    return budgetAmount - expensesAmount;
}
```

This function receives the budget and expenses as parameters and returns the remaining balance.

### Spending Percentage

```javascript
function calculateSpendingPercentage(budgetAmount, expensesAmount) {
    if (budgetAmount <= 0) {
        return 0;
    }

    return (expensesAmount / budgetAmount) * 100;
}
```

This function calculates the percentage of the budget that has been spent.

Using functions keeps the JavaScript code organized and makes the calculations easier to reuse.

## 6. Displaying Results

The calculated information is displayed in the browser console using `console.log()`.

The console displays:

* Monthly budget
* Total expenses
* Remaining balance
* Spending percentage
* Number of expense records
* Budget status

Example:

```text
SpendWise Budget Summary
Monthly Budget: KES 50000.00
Total Expenses: KES 20000.00
Remaining Balance: KES 30000.00
Spending Percentage: 40.00%
```

The application also uses conditional statements to determine whether the user still has money available, has used the entire budget, or has exceeded the budget.

## How to Test

1. Open `index.html` in a browser.
2. The SpendWise welcome prompt should appear.
3. Enter a monthly budget.
4. Enter the amount already spent.
5. Open the browser Developer Tools.
6. Select the **Console** tab.
7. Check the SpendWise Budget Summary.
8. Verify that the remaining balance is calculated correctly.

### Example Test

If the user enters:

```text
Budget: 50000
Expenses: 20000
```

The console should show:

```text
Monthly Budget: KES 50000.00
Total Expenses: KES 20000.00
Remaining Balance: KES 30000.00
Spending Percentage: 40.00%
```

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
* Google Fonts

## Submission

Before submitting the project:

1. Complete all assignment requirements.
2. Test the application thoroughly.
3. Push all project files to the GitHub repository.
4. Ensure the repository is public.
5. Copy the GitHub repository URL.
6. Submit the repository URL through the LMS.
