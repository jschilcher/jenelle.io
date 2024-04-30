import React from "react";

function TeamTable(props){
    return(
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Nickname</th>
      <th scope="col">Location</th>
      <th scope="col">Leage</th>
    </tr>
  </thead>
  <tbody>
      {props.data.map(team=>{
        return(
          <tr>
            <td>{team.name}</td>
            <td>{team.nickname}</td>
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