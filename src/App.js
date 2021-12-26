import React, { Component } from "react";
import "./styles.css";
import "tachyons";
import ChildComponent from "./ChildComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentState: "parent initial state",
      mountState: false,
      childProps: "child initial props"
    };
    console.log("parent life cycle1: constructor");
  }

  componentDidMount() {
    console.log("parent life cycle３: componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      console.log("parent life cycle４: shouldComponentUpdate");
      console.log("nextProps:", nextProps, "thisProps", this.props);
      return true;
    } else if (nextState !== this.state) {
      console.log("parent life cycle４: shouldComponentUpdate");
      console.log("nextState:", nextState, "thisState", this.state);
      return true;
    } else {
      console.log("parent life cycle４: shouldComponentUpdate");
      return false;
    }
  }

  getSnapshotBeforeUpdate() {
    console.log("parent life cycle５: getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("parent life cycle６: componentDidUpdate");
  }

  handleClick = (e) => {
    this.setState({ parentState: "parent updated" });
    console.log("parent event handler");
  };

  handleMount = (e) => {
    this.setState({ mountState: !this.state.mountState });
    console.log("mount event handler");
  };

  handleProps = (e) => {
    this.setState({ childProps: "child's props updated" });
    console.log("props event handler");
  };

  render() {
    console.log("parent life cycle２: render");
    return (
      <div className="App">
        <main className="w-60 mv5 center ba bw2 flex flex-column items-center">
          <h1>{this.state.parentState}</h1>
          <button onClick={this.handleClick}>update parent</button>
          {this.state.mountState ? null : (
            <ChildComponent childProps={this.state.childProps} />
          )}
          <button className="mv4" onClick={this.handleMount}>
            mount / unmount child
          </button>
          <button className="mv4" onClick={this.handleProps}>
            update props of child
          </button>
        </main>
      </div>
    );
  }
}

export default App;
