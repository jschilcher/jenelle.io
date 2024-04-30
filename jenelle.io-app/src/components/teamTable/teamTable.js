import React from "react";
import "./teamTable.css"

function TeamTable(props){
    return(
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">House</th>
      <th scope="col">Location</th>
      <th scope="col">Leage</th>
    </tr>
  </thead>
  <tbody>
      {props.data.map(team=>{
        return(
          <tr>
            <td>{team.name}</td>
            <td>{team.house}</td>
            <td>{team.location}</td>
            <td>{team.leage}</td>
          </tr>
        )
      })}
  </tbody>
</table>
    );
}

export default TeamTable;