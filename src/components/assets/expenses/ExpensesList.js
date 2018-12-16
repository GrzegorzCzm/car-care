import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import SingleExpense from './SingleExpense';


const styles = theme => ({
    root: {
        width: '100%',
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class ExpensesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: [],
        };
        this.collapseAll = this.collapseAll.bind(this);

    }

    collapseAll(){
        this.setState({
            expanded: []
        })
    }

    handleChange = (isExpanded, id) => {
        let expandedArray = this.state.expanded.slice();

        if (isExpanded) {
            expandedArray.splice(expandedArray.indexOf(id), 1)
        } else {
            expandedArray.push(id);
        }
        this.setState({
            expanded: expandedArray
        });
    };

    render = () => {
        const { classes, expenses } = this.props;
        const { expanded } = this.state;
        return (
            <div className={classes.root}>
                <Button variant="outlined" color="primary" className={classes.button} onClick={this.collapseAll}>
                    Collapse all
                </Button>
                {expenses.map((expense, index) => <SingleExpense key={expense.id} expense={expense} handleChange={this.handleChange} isExpanded={expanded.includes(expense.id)} />)}
            </div>
        );
    }
}

ExpensesList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpensesList);
