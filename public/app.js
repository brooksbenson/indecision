'use strict';

var count = 0;
var minusOne = function minusOne() {
  return count--;
};
var reset = function reset() {
  return count = 0;
};
var addOne = function addOne() {
  return count++;
};
var counter = React.createElement(
  'main',
  null,
  React.createElement(
    'h1',
    null,
    'Counter'
  ),
  React.createElement(
    'h3',
    null,
    ' Count: ',
    count,
    ' '
  ),
  React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: minusOne },
      ' -1 '
    ),
    React.createElement(
      'button',
      { onClick: reset },
      ' Reset '
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      ' +1 '
    )
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(counter, appRoot);
