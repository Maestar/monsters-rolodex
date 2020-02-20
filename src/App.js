//React note: If something doesn't require the state or lifecycle methods, it should probably be a component.
import React, { Component } from 'react';
import './App.css';


import {CardList} from './components/card-list/card-list-component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    //alternative to arrow function in handleChange
    //this.handleChange = this.handleChange.bind(this);
  }
// componentDidMount: when component is loaded, do thing.
  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));

  }

  handleChange = (e) => {
    //the arrow function allows us to bind the this context to the app
    // thats because arrow functions have lexical scoping: their context is where they are created not whats inside them.
    this.setState({ searchField: e.target.value})

  }

  render(){

    const { monsters, searchField } = this.state; //equivalent to const monsters = this.state.monsters; ect.

    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
      

    return (
      <div className="App">
        <SearchBox 
        //placeholder and handleChange are 'props' and their contents are passed down to the search component
          placeholder='search Monsters' 
          handleChange={this.handleChange} />
        <CardList monsters = {filteredMonsters} /> 
      </div>
    );
  }
}

export default App;
