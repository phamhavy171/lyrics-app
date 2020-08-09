import React, { Component } from "react";
import axios from "axios";
require("dotenv").config();
const Context = React.createContext();

const cors = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "3bd72b60c2052a3b71058bc9f4ce8b65";
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_TRACKS":
      return {
        ...state,
        track_list: action.payload,
        heading: "Search Results",
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Tracks",
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };
  componentDidMount() {
    axios
      .get(
        `${cors}https://api.musixmatch.com/ws/1.1/chart.tracks.get?&page=1&page_size=10&country=uk&f_has_lyrics=1&apikey=${API_KEY}`
      )
      .then((res) => {
        this.setState({ track_list: res.data.message.body.track_list });
      })
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
