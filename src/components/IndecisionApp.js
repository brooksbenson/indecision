import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Actions from './Actions';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends Component {

  state = {
    options: [],
    selectedOption: ''
  };

  //event handlers

  handleAddOption = (option) => {
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
  };

  handleDecision = () => {
    const {length} = this.state.options;
    const idx = Math.floor(Math.random() * length);
    const selectedOption = this.state.options[idx];
    this.setState(() => ({selectedOption}));
  };

  handleRemoveAll = () => {
    const options = [];
    this.setState(() => ({options}));
  };

  handleRemoveOne = (idx) => {
    let options = JSON.parse(JSON.stringify(this.state.options));
    options.splice(idx, 1);
    this.setState(() => ({options}));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({selectedOption: null}));
  }

  //lifecycle methods

  componentDidMount() {
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

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Actions 
            hasOptions={this.state.options.length > 0}
            handleDecision={this.handleDecision}
          />
          <section className="widget">
            <Options 
              options={this.state.options} 
              handleRemoveAll={this.handleRemoveAll}
              handleRemoveOne={this.handleRemoveOne}
            />
            <AddOption 
              handleAddOption={this.handleAddOption} 
            />
          </section>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  }
};

export default IndecisionApp;