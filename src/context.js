import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [
      {
        track: { track_name: "123" },
      },
      {
        track: { track_name: "abc" },
      },
    ],
    heading: "top 10 track",
  };
  componentDidMount() {
    axios
      .get()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export const Consumer = Context.Consumer;
