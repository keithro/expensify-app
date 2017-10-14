// selectExpensesTotal
export default (expenses) => {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
};

// // Andrew's solution
// export default (expenses) => {
//   return expenses
//     .map((expense) => expense.amount)
//     .reduce((sum, value) => sum + value, 0);
// };