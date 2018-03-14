import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import GameList from './GameList';
import GameDetail from './GameDetail';
import AddGameForm from './AddGameForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      games: [],
      current: {},
      nameVal: '',
      minVal: '',
      maxVal: ''
    }
    this.handleGameClick = this.handleGameClick.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleMinChange = this.handleMinChange.bind(this)
    this.handleMaxChange = this.handleMaxChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Function to handle clicking on a game (shows game details)
  handleGameClick(e) {
    e.stopPropagation()
    this.setState({
      current: this.state.games[parseInt(e.target.id)]
    })
  }

  handleNameChange(e) {
    this.setState({
      nameVal: e.target.value
    })
  }
  handleMinChange(e) {
    this.setState({
      minVal: e.target.value
    })
  }
  handleMaxChange(e) {
    this.setState({
      maxVal: e.target.value
    })
  }
  handleSubmit = (e) => {
    console.log(this.state.games);
  }

  // ////////
  // var newStateArray = this.state.myArray.slice();
  // newStateArray.push('new value');
  // this.setState(myArray: newStateArray);
  //
  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   const { title } = this.state
  //   this.props.addArticle({ title })
  //   this.setState({ title: "" })
  // }
  //
  // ///////

  // API call goes here so that data is available after component mounts
  componentDidMount() {
    axios.get('/api/cardgames').then(result => {
      this.setState({
        games: result.data
      })
    })
  }

  render() {
    return (
      <div>
        <GameList onGameClick={this.handleGameClick} games={this.state.games} />
        <GameDetail game={this.state.current} />
        <AddGameForm
          onNameChange={this.handleNameChange}
          onMinChange={this.handleMinChange}
          onMaxChange={this.handleMaxChange}
          onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
