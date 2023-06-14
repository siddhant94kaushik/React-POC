import React, { useState } from 'react'

function SearchFilter() {

    let ItemList = [
        "Apple",
        "Oranges",
        "Banana",
        "Grapes",
        "JackFruit",
        "Celerio",
        "Citrus Fruits",
        "Ground Nuts"
    ];

    const [filteredList, setFilteredList] = useState(ItemList);

    console.log(ItemList);    

    const filterBySearch = (e) => {
        const input = e.target.value.toLowerCase();
        // console.log(input);

        const updatedList = ItemList.filter((item) => {
            return item.toLowerCase().indexOf(input) !== -1;
        })

        setFilteredList(updatedList);

    }


    return (
        <div className='search-container'>
            <h4>Search Filter:</h4>
            <div className="search-header">
                {/* <div className="search-text">Search:</div> */}
                <input id="search-box" placeholder='search here' onChange={filterBySearch} />
            </div>
            <div id="item-list">
                <ol>
                    {filteredList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default SearchFilter