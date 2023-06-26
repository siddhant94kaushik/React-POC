import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddExpenses({ list, setList, monthData }) {
  let addNewExpense;
  const [addExpenseName, setExpenseName] = useState("");
  const [addCost, setAddCost] = useState();
  const [expenseNameError, setExpenseNameError] = useState("");
  const [costError, setCostError] = useState("");


  const handleExpenseAddition = (e) => {
    e.preventDefault();

    setExpenseNameError("");
    setCostError("");

    if (addExpenseName.trim() === "") {
      setExpenseNameError("Please enter an expense name.");
      return;
    }
    if (/[^a-zA-Z -]/.test(addExpenseName)) {
      setExpenseNameError("Expense description should be a string")
      return;
    }

    if (addCost.trim() === "") {
      setCostError("Please enter an expense cost.");
      return;
    }
    if (!/^\d+$/.test(addCost)) {
      setCostError("Expense cost should be a numerical value.");
      return;
    }
    
    let expenseSum = 0;
    for (let i = 0; i < monthData.expenseList.length; i++) {
       expenseSum += parseInt(monthData.expenseList[i].cost);
    }

    addNewExpense = {
      name: addExpenseName,
      cost: addCost,
      month: monthData.month,
    };
    
    let updatedList = [...list];
    if (expenseSum + parseInt(addCost) > monthData.budget) {
      toast.error("Total expenses exceed the budget!");
      return;
    }else{
      for (let i = 0; i < list.length; i++) {
        if (addNewExpense.month === list[i].month) {
          updatedList[i].expenseList.push(addNewExpense);
        }
      }
    }
      
    
    setList(updatedList);
    setExpenseName("");
    setAddCost("");
    toast.success("Expense added successfully!");
  };


  return (
    <>
      <form onSubmit={handleExpenseAddition}>
        <div className="row">
          <div className="col">
            <label htmlFor="name">Expense Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={addExpenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              // required
            />
            {expenseNameError && <p className="alert alert-danger">{expenseNameError}</p>}     
          </div>
     
          <div className="col">
            <label htmlFor="cost">Expense Cost</label>
            <input
              type="text"
              className="form-control"
              placeholder="cost"
              value={addCost}
              onChange={(e) => setAddCost(e.target.value)}
              // required
            />
            {costError && <p className="alert alert-danger">{costError}</p>}
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={monthData.expenseList?.reduce((acc,curr) => acc+= parseInt(curr.cost), 0) >= monthData.budget}
        >
          Add Expense
        </button>
      </form>
      <ToastContainer />
    </>
  );
}

export default AddExpenses;
