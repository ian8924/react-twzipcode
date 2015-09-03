import React, { Component, PropTypes, findDOMNode } from 'react';

class District extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  static propTypes = {
    changeDistrict: PropTypes.func,
    className: PropTypes.string,
    data: PropTypes.array,
    defaultValue: PropTypes.string,
    name: PropTypes.string
  }

  onChange() {
    let currentDistrict = findDOMNode(this).value;
    this.props.changeDistrict(currentDistrict);
  }

  render() {
    let districts = this.props.data.map((value, key) => {
      return (
        <option key={key} value={value}>{value}</option>
      );
    });

    return (
      <select name={this.props.name}
              className={this.props.className}
              onChange={this.onChange}
              value={this.props.defaultValue}>
        {districts}
      </select>
    );
  }
}

export default District;