import React, { Component } from "react";
import { Link } from "react-router-dom";
import Weather from "../components/weather";

class Day extends Component {
  render() {
    return (
      <div>
        <Weather />
        <Link to="/">Go back Home</Link>
      </div>
    );
  }
}

export default Day;
