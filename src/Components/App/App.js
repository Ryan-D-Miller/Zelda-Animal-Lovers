import './App.css';
import React, {Component} from 'react';
import {getCategory} from '../../apiCalls';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: [],
      error: ''
    }
  }

  componentDidMount() {
    getCategory("creatures")
      .then((data) => {
        const updatedData = this.cleanData(data)
        
        this.setState({ animals: updatedData})
      })
      .catch(err => {
        this.setState({error: err})
      })
  }

  cleanData(data) {
    const updatedData = this.addFoundKey(data.data.non_food)
    updatedData.sort((a, b) => {
      return a.id - b.id
    })
    updatedData.forEach(animal => {
      if (animal.common_locations) {
        animal.common_locations = animal.common_locations.map(location => {
          return `| ${location} | `
        });
      }
    })
    return updatedData
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

  filterData = (isMet) => {
    const filteredData = this.state.animals.filter(animal => animal.isFound === isMet);
    return filteredData;
  }

  render() {
    return (
      <section className="App">
        <Header />
        {this.state.animals.length 
        && 
        <Switch>
          <Route exact
            path='/'
            render={() => {
              return <Dashboard title={"All Friends!"} data={this.state.animals} updateFound={this.updateFound} />
            }}
          />
          <Route exact
            path='/Met'
            render={() => {
              const filteredData = this.filterData(true);
              return <Dashboard title={"Met Friends!"} data={filteredData} updateFound={this.updateFound} />
            }}
            />
          <Route exact
            path='/UnMet'
            render={() => {
              const filteredData = this.filterData(false);
              return <Dashboard title={"UnMet Friends"} data={filteredData} updateFound={this.updateFound} />
            }}
          />
          <Redirect to="/"/>
        </Switch>}
        {this.state.error && <p className="error">Something went wrong Please try again!</p>}
      </section>
    );
  }
}

export default App;
