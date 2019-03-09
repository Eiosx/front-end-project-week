import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './EditNote.css';

class EditNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
            note: {}
        }
    }

    componentDidMount() {
        axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
            .then(response => {
                console.log(response.data)
                this.setState({ note: response.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleInput = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {


        return (
            <div className="EditContainer">
                <h2>Edit Note:</h2>
                <form>
                    <input onChange={this.handleInput} type="text" placeholder="Note Title" name="noteTitle" value={this.noteTitle} />
                    <input className="EditNoteContent" onChange={this.handleInput} type="text" placeholder="Note Content" name="noteContent" value={this.noteContent} />

                    <button onClick={(event) => {
                        return this.props.handleUpdate(event, { '_id': this.state.note['_id'], title: this.state.noteTitle, textBody: this.state.noteContent });
                    }}>Save</button>
                    <Link to='/'>
                        <button>Go Back</button>
                    </Link>

                </form>
            </div>
        )
    }
}

export default EditNote;