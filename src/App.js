import React, { Component } from "react";
import { Navbar } from "reactstrap";
import "./App.css";
import SearchBar from "./containers/searchBar";
import Results from "./components/results";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <SearchBar />
        </Navbar>
        <Results />
      </div>
    );
  }
}

export default App;
