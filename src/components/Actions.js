import React, {Component} from 'react';

const Actions = (props) => (
  <div>
    <button 
      disabled={!props.hasOptions}
      onClick={props.handleDecision}> 
    Make Decision
    </button>
    {props.hasOptions && <button onClick={props.handleRemoveAll}> Remove All! </button>}
  </div>
);

export default Actions;