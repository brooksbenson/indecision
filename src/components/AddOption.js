import React, {Component} from 'react';

class AddOption extends Component {

  state = {
    error: null,
    buttonDisabled: true
  };

  //event handlers

  initiateAddOption = (e) => {
    e.preventDefault();
    let error, buttonDisabled;
    const option  = e.target.elements.option.value;
    const result = this.props.handleAddOption(option);
    if (result === 'valid') {
      e.target.elements.option.value = '';
      error = null;
    } else {
      error = 'That option already exists';
    }
    this.setState(() => ({error, buttonDisabled}));
  };

  evaluateState = (e) => {
    const optionText = e.target.value;
    let buttonDisabled, error;
    optionText.length === 0
      ? buttonDisabled = true
      : buttonDisabled = false;
    this.setState(() => ({buttonDisabled, error}));
  };

  //component methods

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.initiateAddOption} className="add-option">
        {this.state.error && <p className="add-option__error"> {this.state.error} </p>}
        <input 
          className="add-option__input" 
          type="text" 
          name="option" 
          autoComplete="off"
          onChange={this.evaluateState}
        />
        <button 
          disabled={this.state.buttonDisabled}
          className='button'
        > 
        Add Option
        </button>
      </form>
    );
  }
}

export default AddOption;