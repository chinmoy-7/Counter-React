import { useState } from "react";
import "./counter.css";
const Counter = () => {
    const [count,setCount]=useState(0);
    const handleClick = (para)=>{
        switch(para){
            case "Increment":
                setCount(count+1);
                break;
            case "Decrement":
                if(count<=0){
                    alert("Cannot be less than 0");
                }else{
                setCount(count-1);
                }
                break;
        }
    }
  return (
    <>
    <h1>Counter app</h1>
      <div className="counter-container">
        <div className="buttons">
          <button onClick={(e)=>{handleClick("Increment")}}>+</button>
          <button onClick={(e)=>{handleClick("Decrement")}}>-</button>
        </div>
        <div className="output">
            <p>{count}</p>
        </div>
      </div>
    </>
  );
};
export default Counter;
