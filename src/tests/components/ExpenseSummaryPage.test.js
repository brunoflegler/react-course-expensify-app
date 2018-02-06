import React from 'react';
import { shallow } from 'enzyme'
import { ExpenseSummaryPage } from '../../components/ExpenseSummaryPage';



test('should correctly render ExpenseSummaryPage with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummaryPage expensesCount={1} expensesTotal={235} />  );
    expect(wrapper).toMatchSnapshot();
});



test('should correctly render ExpenseSummary with 1 expense', () =>{
    const wrapper = shallow(<ExpenseSummaryPage expensesCount={23} expensesTotal={23512340987} />  );
    expect(wrapper).toMatchSnapshot();
});