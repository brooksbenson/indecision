let count = 0;
const minusOne = () => count--;
const reset = () => count = 0;
const addOne = () => count++;
const counter = (
  <main>
    <h1>Counter</h1>
    <h3> Count: {count} </h3>
    <div>
      <button onClick={minusOne}> -1 </button>
      <button onClick={reset}> Reset </button>
      <button onClick={addOne}> +1 </button>
    </div>
  </main>
);

const appRoot = document.getElementById('app');
ReactDOM.render(counter, appRoot);