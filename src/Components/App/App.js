import './App.css';
import React, {Component} from 'react';
import {getCategory} from '../../apiCalls';

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
      <div className="App">
      </div>
    );
  }
}

export default App;
