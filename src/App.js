import React, { Component } from "react";
import "./App.css";
import SearchBar from "./containers/searchBar";
import Results from "./containers/results";

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Results />
      </div>
    );
  }
}

export default App;
