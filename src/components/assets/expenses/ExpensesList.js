import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import SingleExpense from './SingleExpense';
import ExpandMore from 'mdi-material-ui/MenuDownOutline'



const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

class ExpensesList extends Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes, expenses } = this.props;
        const { expanded } = this.state;

        return (
            <div className={classes.root}>
                {expenses.map(expense => {
                    let { id, date, item, cost, description, address } = expense
                    return (<ExpansionPanel key={id} expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                            <Typography className={classes.heading}>General settings</Typography>
                            <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                <SingleExpense expense={expense} />
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>)
                })}
            </div>
        );
    }
}

ExpensesList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpensesList);
