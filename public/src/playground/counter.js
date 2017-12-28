let count = 0;

const minusOne = () => {
  count--;
  renderApp();
};
const reset = () => {
  count = 0;
  renderApp();
};
const addOne = () => {
  count++;
  renderApp();
};

const appRoot = document.getElementById('app');
const renderApp = () => {
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
  ReactDOM.render(counter, appRoot);
};

renderApp();