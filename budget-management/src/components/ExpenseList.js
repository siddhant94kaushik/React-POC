import React from 'react'
// import ExpenseItem from './ExpenseItem'
import { AiOutlineDelete } from 'react-icons/ai';

function ExpenseList({list, setList, monthData, setMonthlyCostSum, monthlyCostSum}) {

    // console.log(list[0]);
    // console.log(addedExpense);


    const currentMonth = list.find((el) => el.month === monthData.month)
    console.log("current Month",currentMonth);


    const deleteExpense = (expenseName) => {
        
    };

    return (
        <>

            {
             currentMonth && (
                <ul className="list-group">
                     {currentMonth.expenseList.map((expense, index) => (    
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {expense.name}
                                <div>
                                    <span className="badge badge-pill badge-primary mr-4">${expense.cost}</span>
                                </div>
                                <AiOutlineDelete size={24} onClick={() => deleteExpense(expense.name)}></AiOutlineDelete>
                            </li>
                        ))}
                </ul>
                )}
        </>
    )
};

export default ExpenseList