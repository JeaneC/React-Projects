import React from 'react'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux'

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/')
      }}
    />
  </div>
);
//We pass onSubmit to ExpenseForm so we are able to pass data up

export default connect()(AddExpensePage);
