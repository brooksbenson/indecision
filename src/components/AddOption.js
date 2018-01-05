import React, {Component} from 'react';

class AddOption extends Component {
  constructor(props) {
    super(props);
    this.initiateAddOption = this.initiateAddOption.bind(this);
    this.evaluateButtonState = this.evaluateButtonState.bind(this);
    this.state = {
      error: null,
      buttonDisabled: true
    }
  }

  initiateAddOption(e) {
    e.preventDefault();
    let error, buttonDisabled;
    const option  = e.target.elements.option.value;
    const result = this.props.handleAddOption(option);
    if (result === 'valid') {
      e.target.elements.option.value = '';
      buttonDisabled = true;
    } else {
      error = 'That option already exists';
    }
    this.setState(() => ({error, buttonDisabled}));
  }

  evaluateButtonState(e) {
    const optionText = e.target.value;
    let buttonDisabled;
    optionText.length === 0
      ? buttonDisabled = true
      : buttonDisabled = false;
    this.setState(() => ({buttonDisabled}));
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