let app = new Object();
app.title = 'Toggle Visibility';
app.show = true;
app.details = 'Hey, here are some details.';

const toggleDetails = () => {
  app.show = !app.show;
  renderApp();
};

const renderApp = () => {
  const template = (
    <main>
      <h1>{app.title}</h1>
      <button onClick={toggleDetails}>Toggle Visibility</button>
      {app.show && <p>{app.details}</p>}
    </main>
  );
  ReactDOM.render(template, document.getElementById('app'));
};

renderApp();