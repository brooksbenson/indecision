let app = new Object();
app.title = 'Indecision App';
app.subtitle = 'Put your life in the hands of a computer';
app.options = ['One', 'Two'];

const onFormSubmit = (e) => {
  e.preventDefault();
  const {value} = e.target.elements.option;
  if (value) {
    app.options.push(value);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderApp();
};

const makeDecision = () => {
  const choice = Math.floor(Math.random() * app.options.length);
  alert(app.options[choice]);
};

const renderApp = () => {
  const template = (
    <main>
      <h1>{app.title}</h1>
      <h3>{app.subtitle}</h3>
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      {app.options.length === 0 || <button onClick={makeDecision}>Make My Choice</button>}
      <button onClick={removeAll}> Remove All </button>
      <ul>
        {
          app.options.map((item, i) => <li key={item + i}> {item} </li>)
        }
      </ul>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'/>
        <button>Submit</button>
      </form>
    </main>
  );

  ReactDOM.render(template, document.getElementById('app'));
};

renderApp();