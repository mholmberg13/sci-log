import React from 'react'

class Input extends React.Component {

  render () {
    return (
      <>
        <label htmlFor={this.props.name}>{this.props.title}</label>
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