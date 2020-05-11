import React from 'react'
import Entries from './Entries.js'

class Main extends React.Component {
    render () {
        return (
            <main>
                <Entries 
                entries={this.props.entries} 
                handleDelete={this.props.handleDelete}
                handleUpdate={this.props.handleUpdate}
                />
            </main>
        )
    }
}

export default Main