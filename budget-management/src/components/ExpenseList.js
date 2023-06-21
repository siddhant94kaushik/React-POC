import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseList({addedExpense, setAddedExpense, list, setList}) {


    return (
        <>
            {
                addedExpense?.map((expense,index) => (
                    <ExpenseItem
                        key={index}
                        name={expense.name}
                        cost={expense.cost}
                        setAddedExpense={setAddedExpense}
                        addedExpense={addedExpense}
                    />
                    
                ))
            }
        </>
    )
}

export default ExpenseList