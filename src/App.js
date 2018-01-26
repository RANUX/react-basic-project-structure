import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Egnat", age: 20},
      {name: "Kris", age: 28},
      {name: "Xxxx", age: 19}
    ],
    filterName: ''
  }

  onChangeName = (pid, event) => {
    const persons = [...this.state.persons];
    persons[pid].name = event.target.value;
    this.setState({persons});
  }

  renderPersons() {
    return this.state.persons.reduce((rows, p, i) => {
      rows.push(<Person key={i} pid={i} name={p.name} age={p.age} onChangeName={this.onChangeName}/>);
      return rows;
    }, []).filter((person) => this.state.filterName ? person.props.name.toLowerCase() === this.state.filterName.toLowerCase() : true);
  }

  onSwithName = (newName) => {
    let persons = [...this.state.persons, {name: newName, age:28}]
    persons[0] = {name: 'Extra', age: 39};
    this.setState({persons});
  }

  onFilterName = (event) => {
    this.setState({filterName: event.target.value})
  }

  render() {
    const filterBtnStyle = {
      padding: '8px',
      margin: '5px'
    };

    return (
      <div className="App">
        <h1>Hello world</h1>
        <input type="text" onChange={this.onFilterName}/>
        <button style={filterBtnStyle} onClick={this.onSwithName.bind(this, 'Extra person')}>Update persons</button>
        {this.renderPersons()}
      </div>
    );
  }
}

export default App;
