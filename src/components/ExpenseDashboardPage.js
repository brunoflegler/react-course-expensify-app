import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummaryPage from './ExpenseSummaryPage';


export const ExpenseDashboardPage = () => (
    <div>
        <ExpenseSummaryPage />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;