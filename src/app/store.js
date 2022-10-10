import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from '../features/transactions/transactionsSlice';
import budgetsReducer from '../features/budgets/budgetSlice';

export default configureStore({
  reducer: {
    transactions: transactionsReducer,
    budgets: budgetsReducer,
  },
});
