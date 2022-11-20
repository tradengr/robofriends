import React, {Component} from 'react';
import './App.css';
import Cardlist from '../components/CardList';
import 'tachyons';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll'

class App extends Component {
  constructor () {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  };

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({robots: users})})
  };

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const {robots, searchfield} = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield);
    })
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBar searchChange={this.onSearchChange}/>
        <Scroll>
          <Cardlist robots={filteredRobots} />
        </Scroll>
      </div>
    );
  };
};

export default App;
