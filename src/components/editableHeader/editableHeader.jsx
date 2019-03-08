import React, { Component } from "react";

export default class EditableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copy: ""
    };
    this.commonChange = this.commonChange.bind(this);
  }

  commonChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <form>
        <input name="copy" onChange={this.commonChange} />
        <h1>{this.state.copy}</h1>
      </form>
    );
  }
}
