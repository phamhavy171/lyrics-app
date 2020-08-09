import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";
const cors = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "3bd72b60c2052a3b71058bc9f4ce8b65";

class Search extends Component {
  state = {
    trackTittle: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  searchTrack = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `${cors}http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTittle}&page_size=10&page=1&apikey=${API_KEY}`
      )
      .then((res) => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list,
        });
        this.setState({ trackTittle: "" });
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="text-center display-4">Find a song</h1>
              <form onSubmit={this.searchTrack.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter song tittle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                    name="trackTittle"
                  />
                  <button
                    className="btn btn-lg btn-block mb-5 mt-5"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
