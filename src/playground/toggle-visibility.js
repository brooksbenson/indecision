class VisibilityApp extends React.Component {

  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visible: true
    }
  }

  toggleVisibility() {
    this.setState((prev) => {
      return {
        visible: !prev.visible
      }
    });
  }

  render() {
    return (
      <main>
        <h1>Super Sweet Visibility App!</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visible ? 'Hide!' : 'Show!'}
        </button>
        {this.state.visible && <p> I am a detail </p>}
      </main>
    );
  }

};

ReactDOM.render(<VisibilityApp />, document.getElementById('app'));