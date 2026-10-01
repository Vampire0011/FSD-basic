/*
question 3: Create a Personal Expense
Tracker
Utility
using
JavaScript built-in objects,
Map,
Set, and npm
packages.*/

const expenses = new Map();
const categories = new Set();

const addExpense = (category, amount) => {
    expenses.set(category, (expenses.get(category) || 0) + amount);
    categories.add(category);
};

addExpense("Food", 500);
addExpense("Travel", 300);
addExpense("Food", 200);

console.log("Expenses:", expenses);
console.log("Categories:", categories);
console.log("Total:", [...expenses.values()].reduce((a, b) => a + b, 0));
console.log("Date:", new Date().toLocaleDateString());