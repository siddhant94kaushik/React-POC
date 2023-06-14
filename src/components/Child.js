import React,{useState} from 'react'

function Child({ text, updateText }) {

    const [textEnter, setTextEnter] = useState('')

    const handleClick = () => {
        updateText(textEnter); 
        setTextEnter('');
    };

    const handleChangeInput = (e) => {
        setTextEnter(e.target.value);
    }

    return (
        <div className='child-content'>
            <h3>Child Component</h3>
            <input type='text' placeholder='provide text' value={textEnter} onChange={handleChangeInput}></input>
            <button className='btn btn-light' onClick={handleClick}>Change Text</button>
        </div>
    )
}

export default Child