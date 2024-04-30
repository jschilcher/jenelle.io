import React, { useState } from "react";
import "./searchBar.css";

function Search(props) {
    const [search, setSearch] = useState('');
  return(
    <div class="topnav">
            <form action="/action_page.php">
                <input type="text" placeholder="Search..." name="search" onChange={(e) => setSearch(e.target.value)}></input>
            </form>
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
      {props.data.filter((team) => {
        return search.toLowerCase() === ""
        ? team
        : team.name.toLowerCase().includes(search);
      }).map(team=>{
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
    </div>
  );
}


// const searchValue = document.querySelector("[data-search]");

// let allData = [];

// searchValue.addEventListener("input", e => {
//     const value = e.target.value.toLowerCase()
//     allData.forEach(teamData => {
//         const isVisible = 
//             teamData.toLowerCase().includes(value)
//         teamData.element.classList.toggle("hide", !isVisible)
//     })
// })


export default Search;