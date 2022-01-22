import React, { Component, Fragment } from "react";
import "./AppFooter.css";

export default class AppHeader extends Component {
  render() {
    return <h1>{this.props.favourite_color}</h1>;
  }
}
