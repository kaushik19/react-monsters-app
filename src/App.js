import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search.component'
// function App() {
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      monsters: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className="App">
        <SearchBox placeHolder="search monsters" handler= {e => this.setState({searchField: e.target.value})} ></SearchBox>
        <CardList monsters={filteredMonsters}>        
        </CardList>
      </div>
    );
  }
}

export default App;
