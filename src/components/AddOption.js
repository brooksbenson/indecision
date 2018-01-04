import React, {Component} from 'react';

class AddOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    }
  }
  render() {
    return (
      <form>
        <input type="text" name="option" />
        <button> Add Option </button>
      </form>
    );
  }
}

export default AddOption;