import React, { Component } from "react";

export default class About extends Component {
  
  constructor(props) {
    super(props);
    console.log("constructor called", props);
    this.state = {
      userDetails: {},
    };
  }

  fetchUserDetails = async () => {
    const res = await fetch("https://api.github.com/users/RahulPanwar05");
    const userData = await res.json();
    console.log(userData, "userData");
    this.setState({ userDetails: userData });
  };

  componentDidMount() {
    console.log("component did mount");
    this.fetchUserDetails();
  }

  componentDidUpdate() {
    console.log("component  did update");
  }

  componentWillUnmount() {
    // console.log("component unmount");
  }

  render() {
    console.log("render called", this.state.userDetails);
    const { avatar_url, name, location, company } = this.state.userDetails;

    return (
      <div>
        <h1>About use</h1>
        <h1>{name}</h1>
        <img src={avatar_url} alt="" />
        <h3>from :{location}</h3>
        <h3>Company :{company}</h3>
      </div>
    );
  }
}
