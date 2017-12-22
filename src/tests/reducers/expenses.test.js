import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('should set default state', () => {
    const state = expensesReducer(undefined, {
        type : '@@INIT'
    });

    expect(state).toEqual([]);
});


test('should remove expense by id', () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id : expenses[1].id
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(
        [expenses[0], expenses[2]]
    )   
});


test('should remove expenses if idnot found', () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id : '-1'
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
    
});


test('should add expense', () => {
    const expense = {
        id: '4',
        description: 'Assign TV',
        note: '',
        amount: 36,
        createdAt:  moment(0).add(4, 'days').valueOf()
    }
    const action = {
        type : 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    const currentExpenses = [...expenses, expense];
    expect(state).toEqual(currentExpenses);
});

test('should edit expense', () => {
    const amount = 2000;
    const action = {
        type : 'EDIT_EXPENSE',
        id : expenses[1].id,
        updates : {
            amount
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state[1].amount).toBe(amount);
});


test('should  not edit expense if expense not found', () => {
    const updates = {
        id: '-1',
        amount: 2000
    }
    const id = '-1';
    const action = {
        type : 'EDIT_EXPENSE',
        id,
        updates
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});