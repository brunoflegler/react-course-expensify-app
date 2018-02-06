import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moment from 'moment'

const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123456' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123456'
    });
});


test('should setup edit expense action objet', () => {
    const action = editExpense('123456', { note: 'new note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123456',
        updates: {
            note: 'new note value'
        }
    })
});

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
      description: 'Rent',
      note: '',
      amount: 109500,
      createdAt: moment(1000).valueOf()
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
      expect(1).toBe(2)
      done()
    }).catch((done)) // THIS IS THE NEW LINE *********
  })


// test('should add expense to database and store', (done) => {
//     const store = createMockStore({});
//     const expenseData = {
//         description: 'Rent',
//         note: '',
//         amount: 109500,
//         createdAt: moment(1000).valueOf()
//     }
//     store.dispatch(startAddExpense(expenseData)).then(() => {
//         const actions = store.getActions();
//         expect(actions[0].toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseData
//             }
//         }))
//         done()
//     }).catch((done) => {
//         console.log('done', done)
//     })
// })


// test('should add expense with defaults to database and store', () => {

// })


// test('should setup add expense action object with default values', () => {
//     const action = addExpense();

//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense : {
//             id: expect.any(String),
//             description: '',
//             note : '',
//             amount : '',
//             createdAt: 0
//         }
//     })
// })

