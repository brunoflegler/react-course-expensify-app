
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses  from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount : 2500, createdAt :  1513910315630}));
store.dispatch(addExpense({ description: 'Gas bill', amount : 50, createdAt : 1513910315630 }));
store.dispatch(addExpense({ description: 'Eletric bill', amount : 15000, createdAt : 1513910315630}));



const jsx = (
   <Provider store={store}>
        <AppRouter />
   </Provider>
)

ReactDOM.render((
    jsx
), document.getElementById('app'));
