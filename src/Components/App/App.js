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
        const updatedData = this.addFoundKey(data.data.non_food)
        this.setState({ animals: updatedData})
      })
  }

  addFoundKey(data) {
    const updatedData = data.map(animal => ({...animal, isFound: false}));
    return updatedData;
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
