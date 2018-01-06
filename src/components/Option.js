import React, {Component} from 'react';

class Option extends Component {

  initiateRemoval = () => {
    const {idx} = this.props;
    this.props.removeSelf(idx);
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.initiateRemoval}> X </button>
      </li>
    );
  }
};

export default Option;