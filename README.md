# SpendWise Dashboard Shell
## Week 4 CSS Grid & Flexbox Challenge
SpendWise is a modern financial dashboard interface based on the Budget Tracker project developed in previous weeks.

This week's work focuses on creating a responsive dashboard shell using CSS Grid, Flexbox, CSS custom properties, responsive media queries, and card micro-interactions.

No JavaScript functionality was added. The dashboard uses realistic static financial information.

---

## Project Structure

```text
SpendWise/
├── index.html
├── style.css
└── README.md
````

### index.html

Contains the structure of the SpendWise dashboard, including:

* Sidebar navigation
* Dashboard header
* User profile section
* Financial summary
* Six financial category cards
* Recent activity section

### style.css

Contains all visual styling, including:

* CSS Grid
* Flexbox
* CSS custom properties
* Responsive layouts
* Card styling
* Hover and keyboard focus effects
* Dark theme support

---

## 1. Dashboard Layout

The dashboard contains a sidebar navigation and a main content area.

The sidebar includes:

* Dashboard
* Expenses
* Categories
* Savings
* Settings

The main dashboard includes six financial category cards:

1. Food
2. Transport
3. Rent
4. Entertainment
5. Savings
6. Utilities

Each card displays realistic financial information such as spending amounts, budgets, percentages, and progress indicators.

---

## 2. CSS Grid

CSS Grid is used for the main dashboard structure.

The desktop layout uses:

```css
.dashboard {
    display: grid;
    grid-template-columns: 250px 1fr;
}
```

CSS Grid is also used for the category cards:

```css
.category-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

This creates a structured dashboard layout with a fixed sidebar and flexible main content area.

---

## 3. Flexbox

Flexbox is used throughout the dashboard to arrange content.

Examples include:

* Sidebar navigation
* Dashboard header
* User profile
* Financial summary cards
* Category card content
* Recent activity
* Navigation items

For example:

```css
.dashboard-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

Flexbox makes the content easier to align and allows the layout to adapt to different screen sizes.

---

## 4. CSS Custom Properties

The application's theme is defined using CSS variables inside `:root`.

The main variables include:

```css
--brand
--accent
--background
--surface
--text
--text-secondary
```

These variables are reused throughout the stylesheet to keep the design consistent.

---

## 5. Responsive Design

The dashboard becomes a single-column layout on screens smaller than 768px.

The responsive layout is created using:

```css
@media (max-width: 767px)
```

On smaller screens:

* The sidebar moves above the main content.
* Navigation items become more compact.
* Summary items stack vertically.
* Category cards become one column.
* Header content stacks vertically.
* Content spacing is reduced for smaller screens.

The layout can be tested using the browser's DevTools Device Toolbar.

---

## 6. Card Micro-interactions

The dashboard cards include subtle hover and keyboard focus effects.

The animation uses:

```css
transition: 
    transform 0.2s ease,
    box-shadow 0.2s ease;
```

The transition lasts 200ms, which is below the required maximum of 250ms.

Both mouse hover and keyboard focus are supported:

```css
.category-card:hover,
.category-card:focus-visible {
    transform: translateY(-4px);
}
```

The cards move slightly upward and receive a stronger shadow when interacted with.

This provides visual feedback without being distracting.

---

## 7. Dark Theme

A dark theme is included using the required media query:

```css
@media (prefers-color-scheme: dark)
```

Only the CSS custom property values are overridden.

This allows the dashboard to automatically adapt when the user's operating system or browser is using dark mode.

---

## 8. Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* CSS Media Queries
* Google Fonts

---

## Conclusion

The Week 4 SpendWise Dashboard Shell provides the visual foundation for the capstone project.

The dashboard uses modern CSS layout techniques, a consistent theme, responsive design, accessible keyboard focus states, subtle card interactions, and an optional dark theme.
