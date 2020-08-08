import React, { Component } from "react";
// import Genius from "genius-api";
import Axios from "axios";
const Context = React.createContext();
const access_token =
  "Op0e1dDzQbjt4KAe2gmhZjlh5TRW4PsuC8ty3yBL4hrowypcHYURKcWCamZIJ0HD";
// const genius = new Genius(access_token);
const cors = "https://cors-anywhere.herokuapp.com/";

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "top 10 track",
  };
  componentDidMount() {
    Axios.get(
      `${cors}https://api.genius.com/search?q=stan&access_token=${access_token}`
    )
      .then((res) => {
        console.log(res.data.response.hits);
        this.setState({
          track_list: res.data.response.hits.map((song) => {
            return <div>{song.result}</div>;
          }),
        });
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
