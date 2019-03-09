import React from 'react';

import './CreateNote.css';

const CreateNote = props => {

    return (
        <div className="Container">
            <div className="CreateContainer">
                <h2>Create New Note:</h2>
                <form onSubmit={props.handleNewNote}>
                    <input onChange={props.handleInput} type="text" placeholder="Note Title" name="noteTitle" value={props.noteTitle} />
                    <input className="noteContent" onChange={props.handleInput} type="text" placeholder="Note Content" name="noteContent" value={props.noteContent} />
                    <div>
                    <input type="submit" value="Save" />
                    </div>
                </form>
            </div>
        </div>
    )
}


export default CreateNote;