import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Janhavi',
          id: '1',
          
        },
        {
          name: 'Devanshi',
          id: '2'
        
        },
        {
          name: 'Pratyaksh',
          id: '3'
        },
        {
          name: 'Prakhar',
          id:'4'
        },
        {
          name: 'Anushka',
          id: '5'
        
        },
        {
          name: 'Ishan',
          id: '6'
        
        },
        {
          name: 'Raghav',
          id: '7'
        
        },
        {
          name: 'Diya',
          id: '8'        
        },
        {
          name: 'Kavita',
          id: '9'        
        },
        {
          name: 'Rushil',
          id: '10'        
        },
      ],
      searchField: ''


    };
  }
  
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>MONSTERS</h1>
        
        <SearchBox
          placeholder='search monsters'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />  
        <CardList monsters={filteredMonsters}>
      
      </CardList>
      </div>
  
    )
  }

}

export default App;
