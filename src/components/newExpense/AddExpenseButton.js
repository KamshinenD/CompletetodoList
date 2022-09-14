import React from 'react'

const AddExpenseButton = (props) => {

  const handleClick =()=>{
    props.showBtn()
  }

  return (
    <div>
        <button className='AddExpenseButton' onClick={handleClick}>Add New Expense</button>
    </div>
  )
}

export default AddExpenseButton;