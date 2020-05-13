import React from 'react'
import Entry from './Entry.js'

class Entries extends React.Component {
  render () {
        return (
            <div className="entries-container">
                <div className="entries">
                    {this.props.entries.map((entry, i) => <Entry key={i} entry={entry}
                    handleDelete={this.props.handleDelete}
                    handleUpdate={this.props.handleUpdate}
                    />)}
                </div>
            </div>
        )
    }
}

export default Entries
