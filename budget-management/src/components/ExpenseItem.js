import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';

function ExpenseItem({name, cost , setAddedExpense,addedExpense}) {

    

    const deleteExpense = () => {
        setAddedExpense(addedExpense.filter((expense) => expense.name !== name));
      };

    return (
        <ul className='list-group'>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
                {name}
                <div>
                    <span className='badge badge-pill badge-primary mr-4'>
                        ${cost}
                    </span>
                </div>
                <AiOutlineDelete size={24} onClick={deleteExpense}></AiOutlineDelete>
            </li>
        </ul>
    )
}

export default ExpenseItem