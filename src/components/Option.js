import React, {Component} from 'react';

class Option extends Component {

  initiateRemoval = () => {
    const {idx} = this.props;
    this.props.removeSelf(idx);
  }

  render() {
    return (
      <li className='option'>
        <p>{this.props.text}</p>
        <button 
          className='button button--link'
          onClick={this.initiateRemoval}
        >
        Remove
        </button>
      </li>
    );
  }
};

export default Option;