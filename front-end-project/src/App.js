import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import CreateNote from './components/CreateNote/CreateNote';
import Nav from './components/Navigation/Nav';
import Notes from './components/Notes/Notes';

class App extends Component {

  constructor() {
    super();
    this.state = {
      noteTitle: '',
      noteContent: '',
      myNotes: []
    }
  }

  handleInput = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value })
  }

  handleNewNote = event => {
    event.preventDefault();
    let newNote = {
      tags: [],
      title: this.state.noteTitle,
      textBody: this.state.noteContent
    }
    axios
      .post("https://fe-notes.herokuapp.com/note/create", newNote)
      .then(response => {
        console.log(response.data)
        this.setState({ myNotes: [...this.state.myNotes, response.data.success] })
      })
      .catch(err => {
        console.log(err)
      })
    this.setState({ noteTitle: '', noteContent: '' })
  }

  handleViewNote = event => {
    event.preventDefault();

    // axios.get(`https://fe-notes.herokuapp.com/note/get/${asdfsa}`)
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <CreateNote handleInput={this.handleInput} handleNewNote={this.handleNewNote} noteTitle={this.state.noteTitle} noteContent={this.state.noteContent} />
        <Notes myNotes={this.state.myNotes}/>
      </div>
    );
  }
}

export default App;
