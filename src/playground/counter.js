class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.addOne = this.addOne.bind(this);
    this.state = {
      count: 0
    };
  }

  componentWillMount() {
    let count = localStorage.getItem('count');
    if (count) {
      count = parseInt(count);
      !isNaN(count) && this.setState(() => ({count}));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('count', this.state.count);
  }

  minusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  reset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  addOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  render() {
    return (
      <main>
        <h1> Sick Counter App! </h1>
        <h3> Count: {this.state.count} </h3>
        <div>
          <button onClick={this.minusOne}>-1</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.addOne}>+1</button>
        </div>
      </main>
    );
  }
};

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));