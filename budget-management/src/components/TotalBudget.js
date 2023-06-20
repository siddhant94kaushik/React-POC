import React, { useState, useEffect } from 'react'

function TotalBudget({ addedExpense, list, setList }) {

    const [monthData, setMonthData] = useState(list[0])

    console.log(monthData, typeof(monthData));
    const yearlyBudget = 1000000;

    let add = 0;
    for (let i = 0; i < addedExpense.length; i++) {
        add += parseInt(addedExpense[i].cost)
    }
    console.log(add);


    useEffect(() => {
        localStorage.setItem("totalBudget", JSON.stringify(yearlyBudget))
    }, [])


    useEffect(() => {
        localStorage.setItem("monthList", JSON.stringify(list))
    }, [])


    console.log('month data is', list);

    return (
        <>
            {
                <select className='p-3 m-3 alert alert-secondary rounded' 
                value={monthData?.month} 
                onChange={(e) => setMonthData(list.find(el => el.month === e.target.value))}>
                    <option value={list}>Select a month</option>
                    {list?.map((item, index) => (
                        <option key={index} value={item.month}>
                            {item.month}
                        </option>
                    ))}
                </select>
            }

            {
                list && list?.map((item, index) => (
                    <div className='row m-2' key={index}>
                        <div className='col-md p-3 m-2 alert alert-success rounded'>
                            <span>Total Budget:
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="budget"
                                    value={item.budget}
                                    defaultValue={0}
                                />
                            </span>
                        </div>

                        <div className='col-md p-3 m-2 alert alert-dark rounded'>
                            <span>Spent so far:
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="expense"
                                    value={add}
                                    defaultValue={0}
                                />
                            </span>
                        </div>

                        <div className='col-md p-3 m-2 alert alert-info rounded'>
                            <span>Balance Left:
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="balance"
                                    value={(item.budget - add)}
                                    defaultValue={0}
                                />
                            </span>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default TotalBudget