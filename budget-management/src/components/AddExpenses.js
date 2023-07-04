import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function AddExpenses({ list, setList, monthData }) {
  const expenseForm = useForm({
    defaultValues: {
      name: "",
      cost: "",
      description: "",
    },
  });
  const { register, handleSubmit, formState, reset, control } = expenseForm;
  const { errors, dirtyFields } = formState;


  let addNewExpense;

  let m = moment().utc().format(); //string
  let m1 = moment().unix(); //number


  const expenseSum = monthData.expenseList.reduce((sum, expense) => sum + parseInt(expense.cost), 0);


  const handleExpenseSubmittion = (data) => {
    console.log(data);

    addNewExpense = {
      id: m1,
      name: data.name,
      cost: data.cost,
      utcdate: m,
      description: data.description,
    };

    if (expenseSum + parseInt(data.cost) > monthData.budget) {
      toast.error("Total expenses exceed the budget!");
      return;
    } else {
      const item = list.find((el) => el.month === monthData.month);
      if (item) {
        item.expenseList.push(addNewExpense);
      }
    }
       
    setList([...list]);
    reset();
    toast.success("Expense added successfully!");
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleExpenseSubmittion)}>
        <div className="row">
          <div className="col">
            <div className="col-md">
              <label htmlFor="name" className="form-label">
                Expense Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="name"
                id="name"
                {...register("name", {
                  required: "Expense name is required",
                  pattern: {
                    value: /^[a-zA-Z -]/,
                    message: "Expense name should be a string",
                  },
                })}
              />
            </div>
            <p className="text-danger">{errors.name?.message}</p>
          </div>

          <div className="col">
            <div className="col-md">
              <label htmlFor="cost" className="form-label">
                Expense Cost
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="cost"
                id="cost"
                {...register("cost", {
                  required: "Expense cost is required",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Cost should be a number",
                  },
                })}
              />
            </div>
            <p className="text-danger">{errors.cost?.message}</p>
          </div>
        </div>
        <div className="col-5 mb-3">
          <label htmlFor="description" className="form-label">
            Expense Description
          </label>
          <textarea
            className="form-control"
            id="description"
            {...register("description", {
              required: (dirtyFields.name === true || dirtyFields.cost === true)
                  ? "Expense description is required"
                  : false,
            })}
          />
          <p className="text-danger">{errors.description?.message}</p>
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={expenseSum >= monthData.budget}
        >
          Add Expense
        </button>
        {expenseSum >= monthData.budget && (
          <p className="text-danger">
            You have spent the entire alloted budget
          </p>
        )}
      </form>
      <DevTool control={control} />
      <ToastContainer />
    </>
  );
}

export default AddExpenses;
