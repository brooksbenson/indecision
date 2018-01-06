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

  evaluateButtonState = (e) => {
    const optionText = e.target.value;
    let buttonDisabled;
    optionText.length === 0
      ? buttonDisabled = true
      : buttonDisabled = false;
    this.setState(() => ({buttonDisabled}));
  };

  //component methods

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.initiateAddOption}>
        <input type="text" name="option" onChange={this.evaluateButtonState}/>
        {this.state.error && <p> {this.state.error} </p>}
        <button disabled={this.state.buttonDisabled}> Add Option </button>
      </form>
    );
  }
}

export default AddOption;