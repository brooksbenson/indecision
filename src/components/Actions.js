import React, {Component} from 'react';

class Actions extends Component {
  render() {
    return (
      <div>
        <button 
          disabled={!this.props.hasOptions}
          onClick={this.props.handleDecision}> 
        Make Decision
        </button>
        {this.props.hasOptions && <button onClick={this.props.handleRemoveAll}> Remove All! </button>}
      </div>
    );
  }
};

export default Actions;