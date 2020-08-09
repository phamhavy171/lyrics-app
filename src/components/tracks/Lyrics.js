import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../layouts/Spinner";
const cors = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "3bd72b60c2052a3b71058bc9f4ce8b65";
class Lyrics extends Component {
  state = {
    track: {},
    lyric: {},
  };
  componentDidMount() {
    axios
      .get(
        `${cors}https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${API_KEY}`
      )
      .then((res) => {
        // console.log(res.data);
        this.setState({ lyric: res.data.message.body.lyrics.lyrics_body });
        return axios
          .get(
            `${cors}https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${API_KEY}`
          )
          .then((res) => {
            // console.log(res.data);
            this.setState({
              track: `${res.data.message.body.track.track_name} by ${res.data.message.body.track.artist_name}`,
            });
          });
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (
      this.state.track === undefined ||
      this.state.lyric === undefined ||
      Object.keys(this.state.track).length === 0 ||
      Object.keys(this.state.lyric).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark mb-5">
            Go Back
          </Link>
          <h5 className="card">
            <div className="card-header">{this.state.track}</div>
          </h5>
          <div className="card-body">
            <div className="card-text ">{this.state.lyric}</div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Lyrics;
