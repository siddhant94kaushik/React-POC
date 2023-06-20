import React,{useState} from 'react'

function AddExpenses({addExpenseObject}) {

    let addNewExpense;
    const [addExpenseName, setExpenseName] = useState('')
    const [addCost, setAddCost] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
         addNewExpense = {
            name: addExpenseName,
            cost: addCost,
        }
        console.log(addNewExpense);

        addExpenseObject(addNewExpense); 
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