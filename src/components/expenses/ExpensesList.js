import React from 'react'
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";


const ExpensesList = (props) => {
  return (
    <div>
        {props.items.length ===0? (<p className="no-expenses">No Expenses found for the selected year</p>)
      : 
      (props.items.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        />)
      ))}
    </div>
  )
}

export default ExpensesList;