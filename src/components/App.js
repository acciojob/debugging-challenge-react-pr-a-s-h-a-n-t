import React, {  useState } from "react";
import '../styles/App.css';

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <div class="ball">
      <h1 className="count" 
      ondblclick={() => {
        alert("cant edit it")
      }} 
      >{count}</h1>
      <button className='increment-button' onClick={() => {
        setCount(count+1);
      }} >Increment</button>
    </div>
  )
}


export default App;