import React, { Component } from 'react';

import './Notes.css';
import Note from '../Note/Note';


const Notes = props => {

    return (
        <div>
            <h2>Your Notes:</h2>
            {props.myNotes.map(note => {
                return <Note key={note['_id']} title={note.title} textBody={note.textBody} />
            })}
        </div>
    )
}


export default Notes;