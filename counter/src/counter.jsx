import "./counter.css";
const Counter = () => {
  return (
    <>
    <h1>Counter app</h1>
      <div className="counter-container">
        <div className="buttons">
          <button>+</button>
          <button>-</button>
        </div>
        <div className="output">
            <p>1</p>
        </div>
      </div>
    </>
  );
};
export default Counter;
