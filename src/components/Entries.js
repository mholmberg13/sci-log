import React from 'react'
import Entry from './Entry.js'

class Entries extends React.Component {
  render () {
        return (
            <div>
                {this.props.entries.map(entry => <Entry key={entry.id} entry={entry}
                handleDelete={this.props.handleDelete}
                handleUpdate={this.props.handleUpdate}
                />)}
            </div>
        )
    }
}

export default Entries
