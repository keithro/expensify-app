// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            // grabbing all existing properties
            ...expense,
            // overwriting any new properties
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    case 'SET_EXPENSES':
      return action.expenses;
    default:
      return state;
  }
};
