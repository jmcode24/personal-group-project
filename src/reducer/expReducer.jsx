const initialState = {
  expenses: [],
};

function expReducer (state = initialState, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {...state, expenses: [ state.expenses, action.payload]};
    
    case "DELETE_EXPENSE":
      const filteredexpenses = state.expenses.filter((expense) => {
        if(expense.id !== action.payload) return expense
      });
      return {...state, expenses: filteredexpenses};

    case "EDIT_EXPENSE":
      const editedexpenses = state.expenses.map((expense) => {
        if(expense.id === action.payload.id) return action.payload.expenseData;
        return expense
      });
      return {...state, expenses: editedexpenses};

      default:
    return state;
  };
};

export default expReducer;