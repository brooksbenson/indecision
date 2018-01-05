import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Actions from './Actions';
import Options from './Options';
import AddOption from './AddOption';

class IndecisionApp extends Component {
  constructor() {
    super();
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDecision = this.handleDecision.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleRemoveOne = this.handleRemoveOne.bind(this);
    this.state = {
      options: [] 
    }
  }

  componentWillMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
      if (options) this.setState(() => ({options}));
    } catch (e) {
      //do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  handleAddOption(option) {
    let result;
    const isValid = !this.state.options.includes(option);
    if (isValid) {
      result = 'valid';
      const options = this.state.options.concat(option);
      this.setState(() => ({options}));
    } else {
      result = 'Invalid';
    }
    return result;
  }

  handleDecision() {
    const {length} = this.state.options;
    const decision = Math.floor(Math.random() * length);
    alert(this.state.options[decision]);
  }

  handleRemoveAll() {
    const options = [];
    this.setState(() => ({options}));
  }

  handleRemoveOne(idx) {
    let options = JSON.parse(JSON.stringify(this.state.options));
    options.splice(idx, 1);
    this.setState(() => ({options}));
  }

  render() {
    return (
      <div>
        <Header />
        <Actions 
          hasOptions={this.state.options.length > 0}
          handleDecision={this.handleDecision}
          handleRemoveAll={this.handleRemoveAll}
        />
        <Options 
          options={this.state.options} 
          handleRemoveOne={this.handleRemoveOne}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
};

export default IndecisionApp;