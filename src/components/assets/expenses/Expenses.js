import React, { Component } from 'react';
import SingleExpense from './SingleExpense';
import ExpensesList from './ExpensesList';

const expenses = [
    { id: 0, date: "2018-08-19", item: "tires", cost: 35, description: "some details here", address: "dummy address" },
    { id: 1, date: "2018-08-13", item: "wheels", cost: 85, description: "some more details here", address: "dummy second address" },
    { id: 2, date: "2018-07-10", item: "wheels", cost: 85, description: "some more details here", address: "dummy third address" }
]

class Expenses extends Component {
    render() {
        return (
            <div className="Root">
                <ExpensesList expenses={expenses} />

            </div>
        );
    }
}

export default Expenses;
