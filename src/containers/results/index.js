import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data || [] };
    this.handleTrendingSortNewest = this.handleTrendingSortNewest.bind(this);
    this.handleTrendingSortOldest = this.handleTrendingSortOldest.bind(this);
  }
  componentDidMount() {
    const { data } = this.props;
    this.setState({ data });
  }
  handleTrendingSortNewest() {
    const { data, TrendingSortNewest } = this.state;
    if (TrendingSortNewest) return;
    const sortedData = data.sort(
      (a, b) => b.trending_datetime - a.trending_datetime
    );
    this.setState({ data: sortedData });
  }
  handleTrendingSortOldest() {
    const { data, TrendingSortOldest } = this.state;
    if (TrendingSortOldest) return;
    const sortedData = data.sort(
      (a, b) => a.trending_datetime - b.trending_datetime
    );
    this.setState({ data: sortedData });
  }

  render() {
    const { result } = this.props;
    if (!result) return <div />;
    return (
      <div className="mt-4">
        <div>
          <Button onClick={this.handleTrendingSortNewest}> oldest </Button>
          <Button> newest</Button>
          <Button> title asc </Button>
          <Button> title desc </Button>
          <Button> score </Button>
          <Button> rating </Button>
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
              {`Rating:${gif.rating}, Trending Date:${
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

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
