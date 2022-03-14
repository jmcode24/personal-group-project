export const addExpenseAction = (expense) => {
  return {
    type: "ADD_EXPENSE",
    payload: expense,
  };
};

export const delExpenseAction = (id) => {
  return {
    type: "DELETE_EXPENSE",
    payload: id,
  };
};

export const editExpenseAction = (id, expenseData) => {
  return {
    type: "EDIT_EXPENSE",
    payload: {
      id: id,
      expenseData: expenseData,
    },
  };
};