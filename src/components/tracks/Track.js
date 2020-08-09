import React from "react";
import { Link } from "react-router-dom";

const Track = (track) => {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.song_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play" /> Artist:
            </strong>
            {track.artist_name} <br />
            <strong>
              <i className="fas fa-compact-disc" /> Album:
            </strong>
            {track.album}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            View Lyrics <i className="fas fa-align-left"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
