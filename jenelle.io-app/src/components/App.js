import React, { Component } from "react";
import axios from "axios";
import './App.css';
import Title from "./Title/title";
import Logo from './Logo/logo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamData: [],
    };
  }

  componentDidMount() {
    this.getTeamData();
  }

  async getTeamData() {
    let response = await axios.get(
      "http://localhost:5000/api/songs"
    );
    this.setState({
      teamData: response.data,
    });
  }

  render() {
    if (this.state.teamData[0] === undefined) {
      return <div></div>;
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <div>
              <Logo/>
            </div>
            <div>
              <Title/>
            </div>
            <p>
              Learn all about your favorite MLB team
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }
  }


}

export default App;
