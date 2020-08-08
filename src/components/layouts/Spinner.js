import React from "react";
import spinner from "../../assets/Loading_icon.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "40px auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;
