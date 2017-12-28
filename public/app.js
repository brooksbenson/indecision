'use strict';

var app = new Object();
app.title = 'Toggle Visibility';
app.show = true;
app.details = 'Hey, here are some details.';

var toggleDetails = function toggleDetails() {
  app.show = !app.show;
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'main',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: toggleDetails },
      'Toggle Visibility'
    ),
    app.show && React.createElement(
      'p',
      null,
      app.details
    )
  );
  ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
