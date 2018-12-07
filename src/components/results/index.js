import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    const { data } = this.props.result || [];
    if (!data) return <div />;

    return (
      <div className="mt-4">
        {data.map(gif => (
          <img
            src={gif.images.downsized.url}
            style={{ width: "200px", height: "200px" }}
            alt={gif.title}
          />
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
