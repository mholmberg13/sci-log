import React from 'react'
import Form from './Form.js'

function Header(props) {
    return (
      <div>
        <Form handleSubmit={props.handleSubmit}/>
      </div>
    )
}

export default Header;