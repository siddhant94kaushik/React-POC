import React,{useState} from 'react'
import Child from './Child'

function Parent() {

    const [text, setText] = useState('Initial Text');

    const updateText = (text) => {
      setText(text);
    };

  return (
    <div className='parent-container'>
    <h6><p>Provide text in child input to change text in parent</p></h6>    
    <h2>Parent Component</h2>
    <p className='text-entered'>{text}</p>
    <Child text={text} updateText={updateText} />
  </div>
  )
}

export default Parent