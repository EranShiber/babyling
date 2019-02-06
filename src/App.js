import React from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'


class App extends React.Component {
  state = {
    hours: '',
    days: '',
    weeks: '',
    userInput: ''
  }

    hendleSubmit = (e) => {
      e.preventDefault()
      this.setState({days: this.state.userInput * 30 })
      this.setState({hours: this.state.userInput * 720 })
      this.setState({weeks: this.state.userInput * 4.3 })
    }

    hendleInputChange = (e) => {
      this.setState({userInput: e.target.value})
    }


  render() {
    return (
      <div className="App">
        <Header state={this.state} hendleSubmit={this.hendleSubmit} hendleInputChange={this.hendleInputChange} />
        <Tasks state={this.state} />
      </div>
    );
  }
}

export default App

