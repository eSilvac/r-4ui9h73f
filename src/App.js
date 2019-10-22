import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.mirror = this.mirror.bind(this);

    this.state = {
      mirror: ""
    }
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.mirror} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.mirror}</p>
      </div>
    );
  }

  mirror(event) {
    this.setState({
      mirror: event.target.value
    });
  }
}

export default App;
