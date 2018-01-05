import React, {Component} from 'react';

class Option extends Component {
  constructor(props) {
    super(props);
    this.initiateRemoval = this.initiateRemoval.bind(this);
  }

  initiateRemoval() {
    const {idx} = this.props;
    this.props.removeSelf(idx);
  }

  render() {
    console.log(this.props);
    return (
      <li>
        {this.props.text}
        <button onClick={this.initiateRemoval}> X </button>
      </li>
    );
  }
};

export default Option;