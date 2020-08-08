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
            console.log(value);
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
                          key={item.props.children.id}
                          track={item}
                          song_name={item.props.children.full_title}
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
