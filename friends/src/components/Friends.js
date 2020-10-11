import React from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";
//import Loader from "react-loader-spinner";
import NewFriend from "../components/NewFriend";
import { Link, Route } from "react-router-dom";

class Friends extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        // console.log("RES: ", res);
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => {
        console.log("Friends Err is: ", err);
      });

    console.log(this.friends);
  };

  render() {
    return (
      <div className="friends">
        <header className="friends-header">
          <h1>Friends List</h1>

            {/* <button className="btn-friend"> Add a new friend</button> */}
        </header>

        {this.state.friends.map((friend) => (
          <div className="friend">
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        ))}

          <NewFriend />
      </div>
    );
  }
}

export default Friends;
