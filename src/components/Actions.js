import React, {Component} from 'react';

const Actions = (props) => (
  <div>
    <button 
      className='big-button'
      disabled={!props.hasOptions}
      onClick={props.handleDecision}> 
    Make Decision
    </button>
  </div>
);

export default Actions;