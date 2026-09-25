// ==========================================
// SpendWise - JavaScript Foundation
// ==========================================

// 1. Store application data using variables

let budget = 50000;
let totalExpenses = 0;
let expenseCount = 0;

// Array for storing expense information
let expenses = [];


// ==========================================
// 2. Reusable budget calculation functions
// ==========================================

// Calculate the remaining balance
function calculateRemainingBalance(budgetAmount, expensesAmount) {
    return budgetAmount - expensesAmount;
}

// Calculate the percentage of the budget that has been spent
function calculateSpendingPercentage(budgetAmount, expensesAmount) {
    if (budgetAmount <= 0) {
        return 0;
    }

    return (expensesAmount / budgetAmount) * 100;
}


// ==========================================
// 3. Collect user input using prompts
// ==========================================

let userBudget = prompt(
    "Welcome to SpendWise!\n\nEnter your monthly budget:"
);

if (userBudget !== null && userBudget.trim() !== "") {
    userBudget = Number(userBudget);

    if (!isNaN(userBudget) && userBudget > 0) {
        budget = userBudget;
    }
}

let userExpense = prompt(
    "Enter the amount you have already spent:"
);

if (userExpense !== null && userExpense.trim() !== "") {
    userExpense = Number(userExpense);

    if (!isNaN(userExpense) && userExpense >= 0) {
        totalExpenses = userExpense;
    }
}


// ==========================================
// 4. Store expense-related data
// ==========================================

expenses.push({
    type: "Current Expenses",
    amount: totalExpenses
});

expenseCount = expenses.length;


// ==========================================
// 5. Perform budget calculations
// ==========================================

let remainingBalance = calculateRemainingBalance(
    budget,
    totalExpenses
);

let spendingPercentage = calculateSpendingPercentage(
    budget,
    totalExpenses
);


// ==========================================
// 6. Display results in the browser console
// ==========================================

console.log("====================================");
console.log("        SpendWise Budget Summary");
console.log("====================================");

console.log("Monthly Budget: KES " + budget.toFixed(2));
console.log("Total Expenses: KES " + totalExpenses.toFixed(2));
console.log("Remaining Balance: KES " + remainingBalance.toFixed(2));
console.log("Spending Percentage: " + spendingPercentage.toFixed(2) + "%");
console.log("Number of Expense Records: " + expenseCount);

if (remainingBalance > 0) {
    console.log("Status: You still have money available in your budget.");
} else if (remainingBalance === 0) {
    console.log("Status: You have used your entire budget.");
} else {
    console.log(
        "Status: You have exceeded your budget by KES " +
        Math.abs(remainingBalance).toFixed(2)
    );
}

console.log("====================================");
