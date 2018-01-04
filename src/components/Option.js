import React, {Component} from 'react';

class Option extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        {this.props.text}
      </li>
    );
  }
};

export default Option;