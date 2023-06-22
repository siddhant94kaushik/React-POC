import React,{useEffect, useState} from 'react'

function AddExpenses({list, setList, monthData, monthlyCostSum}) {

    let addNewExpense;
    const [addExpenseName, setExpenseName] = useState('')
    const [addCost, setAddCost] = useState()


    // console.log(monthData);
    console.log(list);


    const handleSubmit = (e) => {
        e.preventDefault();
         addNewExpense = {
            name: addExpenseName,
            cost: addCost,
            month: monthData.month,
        }

        let updatedList = [...list];
        console.log(updatedList);
        for(let i=0; i<list.length; i++){
            if(addNewExpense.month === list[i].month){
                updatedList[i].expenseList.push(addNewExpense);
            }
        }

        // if(monthlyCostSum >= monthData.budget){
        //     alert("Sorry! Your expenses has gone higher than monthly budget")   
        // }

        console.log(monthlyCostSum);
        setList(updatedList)
        setExpenseName('');
        setAddCost('');
    }
    

   

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" placeholder="name" value={addExpenseName} onChange={(e)=>setExpenseName(e.target.value)}/>
                    </div>
                    <div className="col">
                        <label htmlFor="cost">Cost</label>
                        <input type="numerical" className="form-control" placeholder="cost" value={addCost} onChange={(e)=>setAddCost(e.target.value)}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Add Expense</button>
            </form>
        </>
    )
}

export default AddExpenses