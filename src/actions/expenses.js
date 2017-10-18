import uuid from 'uuid';
import database from '../firebase/firebase';

// component calls action generator
// action generator returns a function rather than an object (either from below or in filters file) like before
// component takes function and passes to dispatch
// function runs (has the ability to dispatch other actions and do whatever it wants)


// ADD_EXPENSE (returns object)
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

// returns function
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
