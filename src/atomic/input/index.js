import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const { type } = this.props;
    const { value } = this.state;

    return (
      <input
        type={type}
        onChange={this.handleChange}
        value={value}
      />
    )
  }
}
