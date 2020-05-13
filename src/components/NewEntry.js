import React from 'react'
import Form from './Form.js'

function NewEntry(props) {
    return (
      <div className="newForm">
        <Form handleSubmit={props.handleSubmit}/>
      </div>
    )
}

export default NewEntry;