import React, { useState } from "react";
import "./expenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle]= useState("")
  // const [enteredAmount, setEnteredAmount]= useState("")
  // const [enteredDate, setEnteredDate]= useState("")
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    // setEnteredTitle(e.target.value)
    setUserInput({
      ...userInput,
      enteredTitle: e.target.value,
    });
  };

  const amountChangeHandler = (e) => {
    // setEnteredTitle(e.target.value)
    setUserInput({
      ...userInput,
      enteredAmount: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    // setEnteredDate(e.target.value)
    setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    });
    //     setUserInput((prevState)=>{
    //     return {...prevState, enteredDate: e.target.value}
    //     })
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: parseInt(userInput.enteredAmount).toLocaleString("en-US"),
      date: new Date(userInput.enteredDate),
    };

    
    setUserInput({
        enteredAmount: "",
        enteredDate: "",
        enteredTitle: "",
    });
   
    props.saveExpenseData(expenseData);
    props.showAddExpenseButton(true)
};

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control label">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control label">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control label">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">

        <button type="button" onClick={()=>props.showAddExpenseButton(true)}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
