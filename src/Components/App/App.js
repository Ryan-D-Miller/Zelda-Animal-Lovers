import './App.css';
import React, {Component} from 'react';
import {getCategory} from '../../apiCalls';
import Dashboard from '../Dashboard/Dashboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: []
    }
  }

  componentDidMount() {
    getCategory("creatures")
      .then((data) => {
        this.setState({ animals: data.data.non_food})
        console.log(this.state.animals)
      })
  }

  render() {
    return (
      <section className="App">
        <Dashboard />
      </section>
    );
  }
}

export default App;
