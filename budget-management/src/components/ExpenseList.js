import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

function ExpenseList({ list, setList, monthData }) {
  const currentMonth = list.find((el) => el.month === monthData.month);
  console.log(currentMonth);

  const deleteExpenseCost = (id) => {

    currentMonth.expenseList.forEach((expense, i) => {
      if (id === expense.id) {
        currentMonth.expenseList.splice(i, 1);
      }
    });

    setList([...list]);
    toast.success("Expense deleted successfully!");
  };

  return (
    <>
      {currentMonth &&
        (currentMonth.expenseList.length === 0 ? (
          <p>There is no expense added in the list</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Expense Name</th>
                <th scope="col">Expense Cost</th>
                <th scope="col">Description</th>
                <th scope="col">Added on Date</th>
                <th scope="col">Added on Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            {currentMonth.expenseList.map((expense, index) => (
              <tbody key={index}>
                <tr>
                  <th scope="row">{expense.id}</th>
                  <td>{expense.name}</td>
                  <td>${expense.cost}</td>
                  <td>{expense.description}</td>
                  <td>
                    {moment(expense.utcdate).local().format("DD-MM-YYYY")}
                  </td>
                  <td>{moment(expense.utcdate).local().format("hh:mm:ss")}</td>
                  <td>
                    <AiTwotoneDelete
                      size={24}
                      onClick={() => deleteExpenseCost(expense.id)}
                    ></AiTwotoneDelete>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        ))}
      <ToastContainer />
    </>
  );
}

export default ExpenseList;
