import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('sould filter by text value ', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        'startDate': undefined,
        'endDate': undefined
    };
    const result = selectExpenses(expenses,filters);

    expect(result).toEqual(
        [expenses[2], expenses[1]]
    )
});


test('sould filter by start date ', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        'startDate': moment(0),
        'endDate': undefined
    };
    const result = selectExpenses(expenses,filters);

    expect(result).toEqual(
        [expenses[2], expenses[0]]
    )
});


test('sould filter by endDate ', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        'startDate': moment(0).subtract(4, 'days'),
        'endDate':  moment(0)
    };
    const result = selectExpenses(expenses,filters);

    expect(result).toEqual(
        [expenses[0], expenses[1] ]
    )
});


test('sould filter with sort by date desc', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        'startDate': undefined,
        'endDate':  undefined
    };
    const result = selectExpenses(expenses,filters);

    expect(result).toEqual(
        [expenses[2], expenses[0], expenses[1] ]
    )
});

test('sould filter with sort by amount desc ', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        'startDate': undefined,
        'endDate':  undefined
    };
    const result = selectExpenses(expenses,filters);

    expect(result).toEqual(
        [expenses[1], expenses[2], expenses[0] ]
    )
});

