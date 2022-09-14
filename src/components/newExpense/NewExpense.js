import React from 'react';
import { useState } from 'react';
import AddExpenseButton from './AddExpenseButton';
import ExpenseForm from './ExpenseForm';
import "./newExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler=(enteredExpenseData) =>{
  const expenseData ={
    ...enteredExpenseData,
    id: Math.random().toString()
  }

  props.addExpenseData(expenseData);
  }

  const [showAddExpenseButton, setShowAddExpenseButton] = useState(true);

  const showBtn= ()=>{
      setShowAddExpenseButton(false)
  }

  return (
    <div className='new-expense'>
        {showAddExpenseButton?
        (<AddExpenseButton showBtn={showBtn}/>)
        :
        (<ExpenseForm saveExpenseData={saveExpenseDataHandler} showAddExpenseButton={setShowAddExpenseButton}/>)
      }
    </div>
  )
}

export default NewExpense