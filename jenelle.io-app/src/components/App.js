import React, { Component } from "react";
import axios from "axios";
import './App.css';
import Title from "./Title/title";
import Logo from './Logo/logo';
import TeamTable from "./teamTable/teamTable";


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
      "https://hp-api.onrender.com/api/characters", 
          /*{
            "api-key": "api-key0ca80ddc-63f6-476e-b548-e5fb0934fc4b"
          }*/
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
              <TeamTable data= {this.state.teamData}/>
            </div>
            <p>
              Learn all about your favorite MLB team
            </p>
          </header>
        </div>
      );
    }
  }


}

export default App;
