import React, { Component } from "react";
import BasicHeader from "../basicHeader/basicHeader";

export default class EditableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copy: ""
    };
  }

  commonChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <form>
        <input name="copy" onChange={this.commonChange} />
        <BasicHeader copy={this.state.copy} />
      </form>
    );
  }
}
