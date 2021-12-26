import React, { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childState: "child initial"
    };
    console.log("child life cycle1: constructor");
  }

  componentDidMount() {
    console.log("child life cycle３: componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      console.log("child life cycle４: shouldComponentUpdate");
      console.log("nextProps:", nextProps, "thisProps", this.props);
      return true;
    } else if (nextState.childState !== this.state.childState) {
      console.log("child life cycle４: shouldComponentUpdate");
      console.log("nextState:", nextState, "thisState", this.state);
      return true;
    } else {
      console.log("child life cycle４: shouldComponentUpdate");
      return false;
    }
  }

  getSnapshotBeforeUpdate() {
    console.log("child life cycle５: getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("child life cycle６: componentDidUpdate");
  }

  handleClick = (e) => {
    this.setState({ childState: "child updated" });
    console.log("child event handler");
  };

  componentWillUnmount = () => {
    console.log("child life cycle7: componentWillUnmount");
  };

  render() {
    console.log("child life cycle２: render");
    return (
      <div className="w-60 mv4 center ba bw2">
        <h2>{this.state.childState}</h2>
        <h3>{this.props.childProps}</h3>
        <button className="mv2" onClick={this.handleClick}>
          update child
        </button>
      </div>
    );
  }
}

export default ChildComponent;
