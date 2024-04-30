import React from "react";
import "./searchBar.css";

function Search(props) {
  return(
    <div class="topnav">
            <form action="/action_page.php">
                <input type="text" placeholder="Search..." name="search"></input>
                <button type="submit" class="button">Search</button>
            </form>
    </div>
  );
}

function Filter(props){
  return(
    <div>
      {props.search}
    </div>
  )
}


export default Search;