import React, { useState, useEffect } from "react";

function TotalBudget({ list, setList, monthData, setMonthData }) {
  
    
  const expenseSum = monthData.expenseList.reduce((sum, expense) => sum + parseInt(expense.cost), 0);

  return (
    <>
      {list && (
        <select
          className="p-3 m-3 alert alert-secondary rounded"
          value={monthData?.month}
          onChange={(e) =>
            setMonthData(
              list.find((el) => el.month === e.target.value) || list[0]
            )
          }
        >
          <option>Select a month</option>
          {list.map((item, index) => (
            <option key={index} value={item.month}>
              {item.month}
            </option>
          ))}
        </select>
      )}

      {monthData && (
        <div className="row m-2">
          <div className="col-md p-3 m-2 alert alert-success rounded">
            <span>
              Total Budget:
              <input
                type="text"
                className="form-control"
                placeholder="budget"
                value={monthData.budget}
              />
            </span>
          </div>

          <div className="col-md p-3 m-2 alert alert-dark rounded">
            <span>
              Expenditures:
              <input
                type="text"
                className="form-control"
                placeholder="expense"
                value={expenseSum}
              />
            </span>
          </div>

          <div className="col-md p-3 m-2 alert alert-info rounded">
            <span>
              Balance:
              <input
                type="text"
                className="form-control"
                placeholder="balance"
                value={monthData.budget - expenseSum}
              />
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default TotalBudget;
