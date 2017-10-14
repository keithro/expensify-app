import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test('should correctly add up a single expenses', () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test('should correctly add up multiple expenses', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(114195);
});


// // My own test cases incorporating selectExpenses function
// import selectExpenses from '../../selectors/expenses';

// test('should return 0 if no expenses', () => {
//   const filters = {
//     text: 'z',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: undefined
//   };
//   const filteredResults = selectExpenses(expenses, filters);
//   const result = selectExpensesTotal(filteredResults);
//   expect(result).toBe(0);
// });

// test('should correctly add up a single expenses', () => {
//   const filters = {
//     text: 'u',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: undefined
//   };
//   const filteredResults = selectExpenses(expenses, filters);
//   const result = selectExpensesTotal(filteredResults);
//   expect(result).toBe(195);
// });

// test('should correctly add up multiple expenses', () => {
//   const filters = {
//     text: '',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: undefined
//   };
//   const filteredResults = selectExpenses(expenses, filters);
//   const result = selectExpensesTotal(filteredResults);
//   expect(result).toBe(195 + 109500 + 4500);
// });