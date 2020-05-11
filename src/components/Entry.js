import React from 'react'
import Form from './Form.js'


class Entry extends React.Component {
    state = {
        editVisible: false,
        bodyVisible: false
    }

    toggleForm = () => {
        this.setState({editVisible: !this.state.editVisible})
    }

    toggleBody = () => {
        this.setState({bodyVisible: !this.state.bodyVisible})
    }

    handleUpdate = (event, entry) => {
        this.props.handleUpdate(event, entry)
        this.toggleForm()
    }

    render () {
        const {entry, handleDelete, handleUpdate} = this.props
        return (
            <div className="entry">
                    <h3>{ entry.title }</h3>
                    <p>{ entry.author }</p>
                    <p>{this.state.bodyVisible ? entry.body : null }</p> 
                    <button onClick={this.toggleBody}>VIEW ENTRY</button>
                    <button onClick={()=> handleDelete(entry)}>DELETE</button>
                    <button onClick={this.toggleForm}>EDIT</button>
                    {this.state.editVisible ? <Form entry={entry} handleSubmit={handleUpdate} toggleForm={this.toggleForm}/> : null }
            </div>
        )
    }
}

export default Entry;