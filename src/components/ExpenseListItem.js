import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount / 100).format('0,0.00')}
            
            --
             
            {moment(createdAt).format('DD/MM/YYYY HH:mm:ss')}
        </p>
    </div>
);



export default ExpenseListItem;