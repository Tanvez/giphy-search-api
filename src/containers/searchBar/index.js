import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setResults } from "../../store";
import * as Promise from "bluebird";
import "./style.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", data: undefined };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `http://api.giphy.com/v1/gifs/search?&q=${
      this.state.value
    }&api_key=zXhctGdk83qg2qCVSGM2nroskhTtf4Cv`;
    fetch(url)
      .then(response => response.json())
      .then(result => {
        const promiseArray = [];
        // gets all gifs for search result - cors blocked - maybe too many request?
        // limit to total of 75 gifs
        for (let i = 25; i <= 50; i += 25) {
          promiseArray.push(
            fetch(
              `http://api.giphy.com/v1/gifs/search?&q=${
                this.state.value
              }&api_key=zXhctGdk83qg2qCVSGM2nroskhTtf4Cv&offset=${i}`
            ).then(response => response.json())
          );
        }
        Promise.all(promiseArray).then(results => {
          let allResults = result.data;
          results.forEach(res => {
            allResults = allResults.concat(res.data);
          });

          this.setState({ data: allResults });
          this.props.setResults(allResults);
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <div className="search-container">
          <form onSubmit={this.handleSubmit}>
            <input
              className="search__input"
              type="text"
              placeholder="Search"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  result: state.result
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setResults }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
