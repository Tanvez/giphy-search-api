import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.sortScoreHi = this.sortScoreHi.bind(this);
    this.sortScoreLow = this.sortScoreLow.bind(this);
    this.handleTrendingSortOldest = this.handleTrendingSortOldest.bind(this);
    this.handleTrendingSortNewest = this.handleTrendingSortNewest.bind(this);
    this.handleTitleSortingAsc = this.handleTitleSortingAsc.bind(this);
    this.handleTitleSortingDes = this.handleTitleSortingDes.bind(this);
    this.handleRatingSortingAsc = this.handleRatingSortingAsc.bind(this);
    this.handleRatingSortingDes = this.handleRatingSortingDes.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.result !== prevProps.result) {
      this.setState({ result: this.props.result });
    }
  }
  sortScoreHi() {
    const { result } = this.state;
    const sortedDataHi = result.sort((a, b) => b._score - a._score);
    this.setState({ result: sortedDataHi });
  }
  sortScoreLow() {
    const { result } = this.state;
    const sortedDataLow = result.sort((a, b) => a._score - b._score);
    this.setState({ result: sortedDataLow });
  }
  handleTrendingSortOldest() {
    const { result } = this.state;
    const sortedDataTrending = result.sort(
      (a, b) => new Date(a.trending_datetime) - new Date(b.trending_datetime)
    );
    this.setState({ result: sortedDataTrending });
  }

  handleTrendingSortNewest() {
    const { result } = this.state;
    const sortedDataTrendingNew = result.sort(
      (a, b) => new Date(b.trending_datetime) - new Date(a.trending_datetime)
    );
    this.setState({ result: sortedDataTrendingNew });
  }

  handleTitleSortingAsc() {
    //a to z
    const { result } = this.state;
    const sortedDataTitleAsc = result.sort(function(a, b) {
      return a.title > b.title ? 1 : b.title > a.title ? -1 : 0;
    });
    this.setState({ result: sortedDataTitleAsc });
  }

  handleTitleSortingDes() {
    //z to a
    const { result } = this.state;
    const sortedDataTitleDes = result.sort(function(a, b) {
      return b.title > a.title ? 1 : a.title > b.title ? -1 : 0;
    });
    this.setState({ result: sortedDataTitleDes });
  }

  handleRatingSortingAsc() {
    //a to z
    const { result } = this.state;
    const sortedDataRatingAsc = result.sort(function(a, b) {
      return a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0;
    });
    this.setState({ result: sortedDataRatingAsc });
  }

  handleRatingSortingDes() {
    //z to a
    const { result } = this.state;
    const sortedDataRatingDes = result.sort(function(a, b) {
      return b.rating > a.rating ? 1 : a.rating > b.rating ? -1 : 0;
    });
    this.setState({ result: sortedDataRatingDes });
  }

  render() {
    const { result } = this.state;
    if (!result) return <div />;
    return (
      <div className="mt-4">
        <header>Sort by</header>
        <div>
          <Button onClick={this.sortScoreHi}> Highest Score </Button>
          <Button onClick={this.sortScoreLow}> Lowest Score </Button>
          <Button onClick={this.handleTrendingSortOldest}>
            Oldest Trending
          </Button>
          <Button onClick={this.handleTrendingSortNewest}>
            Newest Trending
          </Button>
          <Button onClick={this.handleTitleSortingAsc}> Title Asc </Button>
          <Button onClick={this.handleTitleSortingDes}> Title Desc </Button>
          <Button onClick={this.handleRatingSortingAsc}> Rating Asc </Button>
          <Button onClick={this.handleRatingSortingDes}> Rating Desc </Button>
        </div>
        {result.map(gif => (
          <figure key={gif.id}>
            <a href={gif.bitly_url}>
              <img
                src={gif.images.downsized.url}
                style={{ width: "200px", height: "200px" }}
                alt={gif.title}
              />
            </a>
            <figcaption>
              {`Title:${gif.title} Rating:${gif.rating}, Trending Date:${
                gif.trending_datetime
              }, score:${gif._score}`}
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  result: state.result
});

export default connect(mapStateToProps)(Result);
