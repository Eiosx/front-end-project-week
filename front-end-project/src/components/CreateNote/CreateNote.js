import React from 'react';

import './CreateNote.css';

const CreateNote = props => {

    return (
        <div className="createNoteCont">
            <h2>Create New Note:</h2>
            <form onSubmit={props.handleNewNote}>
                <input onChange={props.handleInput} type="text" placeholder="Note Title" name="noteTitle" value={props.noteTitle} />
                <input className="noteContent" onChange={props.handleInput} type="text" placeholder="Note Content" name="noteContent" value={props.noteContent} />
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}


export default CreateNote;