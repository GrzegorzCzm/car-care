import React, { Component } from 'react';
import SingleExpense from './SingleExpense';


const expenses = [
        {id: 0, date: "2018-08-19", item: "tires", cost: 35, description: "some details here", address: "dummy address"},
        {id: 1, date: "2018-08-13", item: "wheels", cost: 85, description: "some more details here", address: "dummy second address"},
        {id: 2, date: "2018-07-10", item: "wheels", cost: 85, description: "some more details here", address: "dummy third address"}
      ]
    
class Expenses extends Component {
    render() {
        return (
            <div className="Root">
            {expenses.map(expense =>
                <SingleExpense
                    id={expense.id}
                    date={expense.date}
                    item={expense.item}
                    cost={expense.cost}
                    description={expense.description}
                    address={expense.address}
                />
            )}
             
      </div>
        );
    }
}

export default Expenses;
