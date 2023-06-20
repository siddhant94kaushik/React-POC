import './App.css';
import React, { useState, useEffect } from 'react';
import AddExpenses from './components/AddExpenses';
import ExpenseList from './components/ExpenseList';
import TotalBudget from './components/TotalBudget';

function App() {

  let getData;
const getLocalStorageData = () => {
  getData = localStorage.getItem('expenseList')
  // console.log(getData, typeof (getData))s

  if (getData) {
    return JSON.parse(localStorage.getItem('expenseList'));
  } else {
    return [];
  }
}

const [addedExpense, setAddedExpense] = useState(getLocalStorageData())
   
  const [list, setList] = useState([
    {
        "month": "Jan",
        "budget": 40000,
        "expenseList": [...addedExpense]
    },
    {
        "month": "Feb",
        "budget": 40000,
        "expenseList": [...addedExpense]
    },
    {
        "month": "Mar",
        "budget": 40000,
        "expenseList": [...addedExpense]
    },
    {
        "month": "Apr",
        "budget": 40000,
        "expenseList": [...addedExpense]
    },
    {
        "month": "May",
        "budget": 40000,
        "expenseList": [...addedExpense]
    },
    {
        "month": "Jun",
        "budget": 40000,
        "expenseList": [...addedExpense]
    },
    {
        "month": "Jul",
        "budget": 40000,
        "expenseList": [...addedExpense]
    },
    {
        "month": "Aug",
        "budget": 40000,
        "expenseList": [...addedExpense]
    },
    {
        "month": "Sept",
        "budget": 40000,
        "expenseList": [...addedExpense]
    },
    {
        "month": "Oct",
        "budget": 40000,
        "expenseList": [...addedExpense]
    },
    {
        "month": "Nov",
        "budget": 40000,
        "expenseList": [...addedExpense]
    },
    {
        "month": "Dec",
        "budget": 40000,
        "expenseList": [...addedExpense]
    },
])
console.log(list, typeof(list));

  const addExpenseObject = (newExpense) => {
    setAddedExpense([newExpense, ...addedExpense]);
    // setAddedExpense((prev) => [newExpense, ...prev])
  }

  console.log(addedExpense);

  useEffect(() => {
    localStorage.setItem("expenseList", JSON.stringify(addedExpense))
  }, [addedExpense])

  return (
    <>
      <div className='container-flex bg-info m-3'>
        <div className='row'>
          <div className='col-md'>
            <h1 className='mt-3 text-center'>My Budget Planner</h1>

            <div className='row m-3'>
              {/* <div className='col-md'>
                <MonthList addedExpense={addedExpense} />
              </div> */}
              <div className='col-md'>
                <TotalBudget addedExpense={addedExpense} list={list} setList={setList} />
              </div>
            </div>

            <h2 className='m-3'>Expenses List</h2>
            <div className='row m-3'>
              <div className='col-md'>
                <ExpenseList addedExpense={addedExpense} setAddedExpense={setAddedExpense} list={list} setList={setList}/>
              </div>
            </div>

            <h2 className='m-4'>Add Expenses</h2>
            <div className='row m-3'>
              <div className='col-md'>
                <AddExpenses addExpenseObject={addExpenseObject} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
