import './App.css';
import React, {Component} from 'react';
import {getCategory} from '../../apiCalls';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';

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
      })
  }

  render() {
    return (
      <section className="App">
        <Header />
        {this.state.animals.length && <Dashboard data={this.state.animals}/>}
      </section>
    );
  }
}

export default App;
