import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import CreateNote from './components/CreateNote/CreateNote';
import Nav from './components/Navigation/Nav';
import Notes from './components/Notes/Notes';
import ViewNote from './components/ViewNote/ViewNote';
import EditNote from './components/EditNote/EditNote';
import DeleteNote from './components/DeleteNote/DeleteNote';

class App extends Component {

  constructor() {
    super();
    this.state = {
      noteTitle: '',
      noteContent: '',
      myNotes: [],
      message: ''
    }
  }

  componentDidMount() {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ myNotes: response.data })
      })
      .catch(err => {
        console.log(err)
      })

  }

  viewNotes = event => {
    event.preventDefault();
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ myNotes: response.data })
      })
      .catch(err => {
        console.log(err)
      })
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

  handleUpdate = (event, note) => {
    event.preventDefault();
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${note['_id']}`, note)
      .then(response => {
        console.log(response)
        axios.get('https://fe-notes.herokuapp.com/note/get/all')
          .then(response => {
            this.setState({ myNotes: response.data })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleDelete = (event, idNum) => {
    event.preventDefault();
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${idNum}`)
      .then(response => {
        console.log(response)
        this.setState({ msg: response.data.success })
        axios.get('https://fe-notes.herokuapp.com/note/get/all')
          .then(response => {
            this.setState({ myNotes: response.data })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return (
      <div className="App">
        <Route path="/" render={() => (<Nav viewNotes={this.viewNotes} />)} />
       
        <Route exact path="/create/note" render={() => (<CreateNote handleInput={this.handleInput} handleNewNote={this.handleNewNote} noteTitle={this.state.noteTitle} noteContent={this.state.noteContent} />)} />
       
        <Route exact path="/" render={() => (<Notes myNotes={this.state.myNotes} />)} />
        
        <Route exact path="/:id" render={(routeProps) => (<ViewNote {...routeProps} />)} />
        <Route exact path="/:id/edit" render={(routeProps) => (<EditNote {...routeProps} handleUpdate={this.handleUpdate} />)} />
        <Route exact path="/:id/delete" render={(routeProps) => (<DeleteNote {...routeProps} handleDelete={this.handleDelete} />)} />
        
      </div>
    );
  }
}

export default App;
