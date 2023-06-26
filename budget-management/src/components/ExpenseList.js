import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ExpenseList({ list, setList, monthData }) {

  const currentMonth = list.find((el) => el.month === monthData.month);

  const deleteExpenseCost = (expenseName) => {
    console.log(expenseName);
    const { name, cost, month } = expenseName;  
    
    const deleteExpense = {
      name: name,
      cost: cost,
      month: month,
    };

    let updatedList = [...list];
    for (let i = 0; i < list.length; i++) {
      if (deleteExpense.month === list[i].month) {
        for (let j = 0; j < list[i].expenseList.length; j++) {
          if (deleteExpense.name === list[i].expenseList[j].name) {
            updatedList[i].expenseList.splice(j, 1);
            break;
          }
        }
      }
    }

    setList(updatedList);
    toast.success("Expense deleted successfully!");
  };

  return (
    <>
      {currentMonth && (
        <ul className="list-group">
          {currentMonth.expenseList.map((expense, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="col-md">  
              {expense.name}
              </div>
              <div className="col-md">
                <span className="badge badge-pill badge-primary mr-4">
                  ${expense.cost}
                </span>
              </div>
              <AiOutlineDelete
                size={24}
                onClick={() => deleteExpenseCost(expense)}
              ></AiOutlineDelete>
            </li>
          ))}
        </ul>
      )}
      <ToastContainer />
    </>
  );
}

export default ExpenseList;
