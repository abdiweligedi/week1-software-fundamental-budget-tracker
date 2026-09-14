# My Budget Tracker

## Project Description

My Budget Tracker is a simple HTML and CSS webpage designed to help users
record and view their expenses.

This project was originally created in Week 1 and has been upgraded in Week 2
with an expense table, an improved expense form, multimedia content,
interactive elements, and advanced CSS selectors.

## Files

### index.html

The `index.html` file contains the structure and content of the Budget Tracker.

It includes:

- A main page heading and description
- A money bag logo using an `<img>` element
- An Add Expense form
- Text, number, date, and category inputs
- A category dropdown with five expense categories
- An Add Expense button
- A collapsible "How to use this tracker" section
- An expense table containing five sample expenses
- A budgeting video embedded with an `<iframe>`

### style.css

The `style.css` file controls the appearance of the Budget Tracker.

It includes:

- Page and section styling
- Form and input styling
- Button styling
- Expense table borders and spacing
- A colored table header
- Alternating table row colors
- Table row hover effects
- Focus effects for form inputs
- Responsive styling for smaller screens

## HTML Table

The expense table uses the correct HTML table structure:

- `<table>` creates the table
- `<thead>` contains the table headings
- `<tbody>` contains the expense data
- `<tr>` creates each table row
- `<th>` creates the column headings
- `<td>` contains the expense information

The table contains five sample expenses.

## Expense Form

The Add Expense section uses a proper `<form>` element.

The category field is a `<select>` dropdown containing:

1. Food
2. Transport
3. Rent
4. Entertainment
5. Other

Each form input has a clear and matching `id` and `name` attribute.

The Add Expense button uses:

```html
<button type="button">Add Expense</button>