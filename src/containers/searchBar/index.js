import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setResults } from "../../store";
import Results from "../../components/results";
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
    console.log("A name was submitted: " + this.state.value);
    console.log(process.env.GIPHY_API_KEY);
    const url = `http://api.giphy.com/v1/gifs/search?&q=${
      this.state.value
    }&api_key=zXhctGdk83qg2qCVSGM2nroskhTtf4Cv`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("got the data ", data);
        this.setState(data);
        this.props.setResults(data);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="search-box">
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Search Giphy API"
              />
              <span />
            </div>
          </div>
        </form>
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
