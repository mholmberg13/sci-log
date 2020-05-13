import React from 'react'

class Input extends React.Component {

  render () {
    return (
      <>
        <label id={this.props.name + "-label"} htmlFor={this.props.name}>{this.props.name}: </label>
        <input
          id={this.props.name}
          name={this.props.name}
          type={this.props.type}
          value={this.props.value}
          onChange={this.props.handleChange}
          placeholder={this.props.placeholder}
        />
      </>
    )
  }
}

export default Input