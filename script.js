// ==========================================
// SpendWise - Week 6 JavaScript
// ==========================================


// ==========================================
// 1. APPLICATION DATA
// ==========================================

// Monthly budget
let budget = 50000;

// Array used to store multiple expense records
let expenses = [];


// ==========================================
// 2. GET HTML ELEMENTS
// ==========================================

const expenseForm = document.getElementById("expense-form");

const expenseNameInput = document.getElementById("expense-name");

const expenseAmountInput = document.getElementById("expense-amount");

const expenseCategoryInput = document.getElementById("expense-category");

const expenseList = document.getElementById("expense-list");

const budgetDisplay = document.getElementById("budget-display");

const spentDisplay = document.getElementById("spent-display");

const remainingDisplay = document.getElementById("remaining-display");

const budgetStatus = document.getElementById("budget-status");

const formMessage = document.getElementById("form-message");


// ==========================================
// 3. BUDGET CALCULATION FUNCTION
// ==========================================

function calculateTotalExpenses() {

    let total = 0;

    // Loop through every expense in the array
    expenses.forEach(function(expense) {

        total += expense.amount;

    });

    return total;
}


// ==========================================
// 4. CALCULATE REMAINING BALANCE
// ==========================================

function calculateRemainingBalance() {

    const totalExpenses = calculateTotalExpenses();

    return budget - totalExpenses;
}


// ==========================================
// 5. UPDATE BUDGET SUMMARY
// ==========================================

function updateBudgetSummary() {

    const totalExpenses = calculateTotalExpenses();

    const remainingBalance = calculateRemainingBalance();


    // Update values on the webpage
    budgetDisplay.textContent =
        "KES " + budget.toLocaleString();

    spentDisplay.textContent =
        "KES " + totalExpenses.toLocaleString();

    remainingDisplay.textContent =
        "KES " + remainingBalance.toLocaleString();


    // ======================================
    // CONDITIONAL STATEMENTS
    // ======================================

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
}


// ==========================================
// 6. DISPLAY EXPENSES
// ==========================================

function displayExpenses() {

    // Clear the existing list
    expenseList.innerHTML = "";


    // Conditional for empty array
    if (expenses.length === 0) {

        expenseList.innerHTML = `
            <p class="empty-message">
                No expenses added yet. Add your first expense above.
            </p>
        `;

        return;
    }


    // Loop through all stored expenses
    expenses.forEach(function(expense, index) {

        const expenseItem = document.createElement("div");

        expenseItem.className = "activity-item";


        expenseItem.innerHTML = `
            <span class="activity-icon">
                ${getCategoryIcon(expense.category)}
            </span>

            <div class="activity-details">
                <strong>${expense.name}</strong>
                <span>${expense.category}</span>
            </div>

            <strong class="activity-amount">
                - KES ${expense.amount.toLocaleString()}
            </strong>

            <button
                class="delete-btn"
                data-index="${index}"
                type="button"
            >
                Delete
            </button>
        `;


        expenseList.appendChild(expenseItem);

    });


    // Add events to delete buttons
    const deleteButtons =
        document.querySelectorAll(".delete-btn");


    deleteButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const index = Number(button.dataset.index);

            deleteExpense(index);

        });

    });
}


// ==========================================
// 7. CATEGORY ICON FUNCTION
// ==========================================

function getCategoryIcon(category) {

    if (category === "Food") {
        return "🍔";
    }

    if (category === "Transport") {
        return "🚗";
    }

    if (category === "Rent") {
        return "🏠";
    }

    if (category === "Entertainment") {
        return "🎬";
    }

    if (category === "Savings") {
        return "💰";
    }

    if (category === "Utilities") {
        return "💡";
    }

    return "💳";
}


// ==========================================
// 8. UPDATE CATEGORY TOTALS
// ==========================================

function updateCategoryTotals() {

    const categories = [
        "Food",
        "Transport",
        "Rent",
        "Entertainment",
        "Savings",
        "Utilities"
    ];


    // Loop through every category
    categories.forEach(function(category) {

        let categoryTotal = 0;


        // Loop through every expense
        expenses.forEach(function(expense) {

            if (expense.category === category) {

                categoryTotal += expense.amount;

            }

        });


        const categoryId =
            category.toLowerCase();


        const totalElement =
            document.getElementById(
                categoryId + "-total"
            );


        const percentageElement =
            document.getElementById(
                categoryId + "-percentage"
            );


        if (totalElement) {

            totalElement.textContent =
                "KES " + categoryTotal.toLocaleString();

        }


        // Calculate percentage of total spending
        const totalExpenses =
            calculateTotalExpenses();


        if (percentageElement && totalExpenses > 0) {

            const percentage =
                (categoryTotal / totalExpenses) * 100;

            percentageElement.textContent =
                Math.round(percentage) + "%";

        } else if (percentageElement) {

            percentageElement.textContent = "0%";

        }

    });
}


// ==========================================
// 9. DELETE EXPENSE
// ==========================================

function deleteExpense(index) {

    // Remove the selected expense from the array
    expenses.splice(index, 1);


    // Update the webpage
    displayExpenses();

    updateBudgetSummary();

    updateCategoryTotals();

}


// ==========================================
// 10. HANDLE FORM SUBMISSION
// ==========================================

expenseForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();


    // Collect user input
    const name = expenseNameInput.value.trim();

    const amount =
        Number(expenseAmountInput.value);

    const category =
        expenseCategoryInput.value;


    // ======================================
    // INPUT VALIDATION
    // ======================================

    if (name === "") {

        formMessage.textContent =
            "Please enter an expense name.";

        return;
    }


    if (amount <= 0 || isNaN(amount)) {

        formMessage.textContent =
            "Please enter a valid expense amount.";

        return;
    }


    if (category === "") {

        formMessage.textContent =
            "Please select an expense category.";

        return;
    }


    // ======================================
    // CREATE EXPENSE OBJECT
    // ======================================

    const newExpense = {

        name: name,

        amount: amount,

        category: category

    };


    // Add expense to the array
    expenses.push(newExpense);


    // ======================================
    // UPDATE THE APPLICATION
    // ======================================

    displayExpenses();

    updateBudgetSummary();

    updateCategoryTotals();


    // Success message
    formMessage.textContent =
        "Expense added successfully!";


    // Clear form
    expenseForm.reset();

});


// ==========================================
// 11. INITIAL PAGE LOAD
// ==========================================

updateBudgetSummary();

displayExpenses();

updateCategoryTotals();
