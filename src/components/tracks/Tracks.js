import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layouts/Spinner";
import Track from "../tracks/Track";

class Tracks extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {(value) => {
            if (
              value.track_list === undefined ||
              value.track_list.length === 0
            ) {
              return <Spinner />;
            } else {
              return (
                <React.Fragment>
                  <h3 className="text-center mb-4">{value.heading}</h3>
                  <div className="row">
                    {value.track_list.map((item) => {
                      return (
                        <Track
                          key={item.track.track_id}
                          track={item}
                          song_name={item.track.track_name}
                          artist_name={item.track.artist_name}
                          album={item.track.album_name}
                          track_id={item.track.track_id}
                        />
                      );
                    })}
                  </div>
                </React.Fragment>
              );
            }
          }}
        </Consumer>
      </div>
    );
  }
}

export default Tracks;
