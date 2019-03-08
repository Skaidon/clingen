import React, { Component } from "react";
import "./basicHeader.scss";

export default class BasicHeader extends Component {
  constructor(props) {
    super(props);
    this.copy = "";
    this.align = "";
  }
  render() {
    return <h1 className={this.props.align}>{this.props.copy}</h1>;
  }
}
