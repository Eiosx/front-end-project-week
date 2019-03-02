import React, { Component } from 'react';
import axios from 'axios';
import { route } from 'react-router-dom';

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
        axios
          .get(`https://fe-notes.herokuapp.com/note/get/${response.data.success}`)
          .then(response => {
            this.setState({ myNotes: [...this.state.myNotes, response.data] })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
    this.setState({ noteTitle: '', noteContent: '' })
  }

  handleUpdate = note => {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${note['_id']}`, note)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleDelete = note => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${note['_id']}`)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // handleViewNote = event => {
  //   event.preventDefault();
  //   // axios.get(`https://fe-notes.herokuapp.com/note/get/${asdfsa}`)
  // }

  render() {
    return (
      <div className="App">
        <Route path="/" component={Nav} />
        {/* <Nav /> */}
        <Route exact path="/create" component={CreateNote} />
        {/* <CreateNote handleInput={this.handleInput} handleNewNote={this.handleNewNote} noteTitle={this.state.noteTitle} noteContent={this.state.noteContent} /> */}
        <Route path="/" component={Notes} />
        {/* <Notes myNotes={this.state.myNotes} /> */}
      </div>
    );
  }
}

export default App;
