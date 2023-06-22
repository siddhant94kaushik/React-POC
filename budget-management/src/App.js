import './App.css';
import React, { useState, useEffect } from 'react';
import AddExpenses from './components/AddExpenses';
import ExpenseList from './components/ExpenseList';
import TotalBudget from './components/TotalBudget';

function App() {


  const getLocalStorageDataForExpenseList = () => {
    let getData = localStorage.getItem('expenseList')

    if (getData) {
      return JSON.parse(localStorage.getItem('expenseList'));
    } else {
      return [];
    }
  }

  const getLocalStorageDataForMonthList = () => {
    let getData1 = localStorage.getItem('monthList')

    if (getData1) {
      return JSON.parse(localStorage.getItem('monthList'));
    } else {
      return [
        {
          "month": "Jan",
          "budget": 100000,
          "expenseList": []
        },
        {
          "month": "Feb",
          "budget": 100000,
          "expenseList": []
        },
        {
          "month": "Mar",
          "budget": 200000,
          "expenseList": []
        },
        {
          "month": "Apr",
          "budget": 300000,
          "expenseList": []
        },
        {
          "month": "May",
          "budget": 400000,
          "expenseList": []
        },
        {
          "month": "Jun",
          "budget": 500000,
          "expenseList": []
        },
        {
          "month": "Jul",
          "budget": 600000,
          "expenseList": []
        },
        {
          "month": "Aug",
          "budget": 700000,
          "expenseList": []
        },
        {
          "month": "Sept",
          "budget": 800000,
          "expenseList": []
        },
        {
          "month": "Oct",
          "budget": 900000,
          "expenseList": []
        },
        {
          "month": "Nov",
          "budget": 700000,
          "expenseList": []
        },
        {
          "month": "Dec",
          "budget": 600000,
          "expenseList": []
        },
      ]}}
  

  const getData = getLocalStorageDataForExpenseList();
  console.log("expenseList get from localStorage", getData);

  const getData1 = getLocalStorageDataForMonthList();
  console.log("monthList after adding expense to any month from loaclStorage",getData1)



  const [list, setList] = useState(getLocalStorageDataForMonthList())

  const [monthData, setMonthData] = useState(list[0])

  const [monthlyCostSum, setMonthlyCostSum] = useState(0);


  useEffect(() => {
    localStorage.setItem("monthList", JSON.stringify(list))
  }, [list])


  return (
    <>
      <div className='container-flex bg-info m-3'>
        <div className='row'>
          <div className='col-md'>
            <h1 className='mt-3 text-center'>My Budget Planner</h1>

            <div className='row m-3'>
              <div className='col-md'>
                <TotalBudget
                  list={list}
                  setList={setList}
                  monthData={monthData}
                  setMonthData={setMonthData}
                  getData1={getData1}
                  monthlyCostSum={monthlyCostSum}
                  setMonthlyCostSum={setMonthlyCostSum}
                />
              </div>
            </div>

            <h2 className='m-3'>Expenses List</h2>
            <div className='row m-3'>
              <div className='col-md'>
                <ExpenseList
                  list={list}
                  setList={setList}
                  monthData={monthData}
                />
              </div>
            </div>

            <h2 className='m-4'>Add Expenses</h2>
            <div className='row m-3'>
              <div className='col-md'>
                <AddExpenses
                  list={list}
                  setList={setList}
                  monthData={monthData}
                  monthlyCostSum={monthlyCostSum}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
