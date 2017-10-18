import uuid from 'uuid';
import database from '../firebase/firebase';

// component calls action generator
// action generator returns a function rather than an object (either from below or in filters file) like before
// component takes function and passes to dispatch
// function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE (returns object, actually changes redux store)
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

// asyncroneous action returns function
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE (returns empty object)
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_EXPENSES - sets expenses array (to store? from firebase?)
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  // fetch all data
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];

      // parse data into array
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      // dispatch SET_EXPENSES
      dispatch(setExpenses(expenses));
    });
  };
};

