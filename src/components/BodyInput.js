import React from 'react'

class BodyImport extends React.Component {
    render() {
        return (
            <div className="body-area">
                <label id={this.props.name + "-label"} htmlFor={this.props.name}>{this.props.name}: </label>
                <textarea 
                cols="50" rows="10"
                id={this.props.name}
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.handleChange}></textarea>
            </div>
        )
    }
}

export default BodyImport;