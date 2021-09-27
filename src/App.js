import Users from "./Components/userCard";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { users_data: [], loading: true };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    document.getElementById("main").style.display = "inline-block";
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-dark">
          <div class="container-fluid">
            <h3>Zippy</h3>
          </div>
        </nav>
        <h1>Hello Everyone!</h1>
        <h3>Click the button bellow to access all the users.</h3>
        <button onClick={this.updateState}>Get Users</button>
        <div className="box2">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
      </div>
    );
  }
}

export default App;
