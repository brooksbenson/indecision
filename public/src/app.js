class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer.';
    const options = ['One', 'Two', 'Three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption /> 
      </div>
    );
  }
};

class Header extends React.Component {
  render() {
    const {title, subtitle} = this.props;
    return (
      <header>
        <h1> {title} </h1>
        <h3> {subtitle} </h3>
      </header>
    );
  }
};

class Action extends React.Component {
  render() {
    return (
      <div>
        <button> Make my choice </button>
      </div>
    );
  }
};

class Option extends React.Component {
  render() {
    return <li> {this.props.item} </li>;
  }
};

class Options extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.options.map((item, i) => {
            return <Option key={item} item={item} />
          })
        }
      </ul>
    );
  }
};

class AddOption extends React.Component {
  render() {
    return (
      <form>
        <input type='text' name='option' />
        <button>Submit</button>
      </form>
    );
  }
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));