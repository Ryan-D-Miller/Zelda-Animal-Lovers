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

  updateFound = (id) => {
    const updatedData = this.state.animals.map(animal => {
      if(animal.id === id) {
        animal.isFound = !animal.isFound;
      }
      return animal;
    })
    this.setState({animal: updatedData})
  }

  render() {
    return (
      <section className="App">
        <Header />
        {this.state.animals.length 
        && <Dashboard data={this.state.animals} updateFound={this.updateFound}/>}
      </section>
    );
  }
}

export default App;
