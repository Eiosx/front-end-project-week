import React, { Component } from 'react';

class EditNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: ''
        }
    }

    handleInput = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {


        return (
            <div>
                <h2>Edit Note:</h2>
                <form onSubmit={{/*(event) => {
                    return this.props.handleUpdate(event, { ...props.note, title: this.noteTitle, textBody: this.noteContent });
                }*/}}>
                    <input onChange={this.handleInput} type="text" placeholder="Note Title" name="noteTitle" value={this.noteTitle} />
                    <input onChange={this.handleInput} type="text" placeholder="Note Content" name="noteContent" value={this.noteContent} />
                    <input type="submit" value="Update" />
                </form>
            </div>
        )
    }
}

export default EditNote;