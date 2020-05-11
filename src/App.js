import React from 'react';
import Main from './components/Main.js'
import Header from './components/Header.js'
import './App.css';
class App extends React.Component {
  state = {
    entries: []
  }

  handleAdd = (event, formInputs) => {
    event.preventDefault();
    fetch("http://localhost:3000/entries", {
      body: JSON.stringify(formInputs),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((createdEntry) => createdEntry.json())
      .then((jsonedEntry) => {
        // add Entry to entries
        this.setState({
          entries: [jsonedEntry, ...this.state.entries],
        });
      })
      .catch((error) => console.log(error));
  };

  handleDelete = (deletedEntry) => {
    fetch(`http://localhost:3000/entries/${deletedEntry.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((json) => {
        const entries = this.state.entries.filter(
          (entry) => entry.id !== deletedEntry.id
        );
        this.setState({ entries });
      })
      .catch((error) => console.log(error));
  };


  handleUpdate = (event, formInputs) => {
    event.preventDefault()
    console.log(formInputs.id)
    fetch(`http://localhost:3000/entries/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
  })
   .then((updatedEntry) => {
     this.getEntries()
   })
   .catch((error) => console.log(error))
  }

  componentDidMount() {
    this.getEntries()
  }

  getEntries () {
    fetch('http://localhost:3000/entries')
      .then(response => response.json())
      .then(json => this.setState({ entries: json }))
      .catch(error => console.error(error))
  }
  render() {
    return (
      <div className="App">
          <Header handleSubmit={this.handleAdd} />
          <Main 
          entries={this.state.entries} 
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          />
      </div>
    )
  }
  
};

export default App;
