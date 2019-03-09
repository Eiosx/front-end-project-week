import React from 'react';

import './Notes.css';
import Note from '../Note/Note';



const Notes = props => {

    return (
        <div className="Container">
            <h2>Your Notes:</h2>
            <div className="NotesContainer">
                {(props.myNotes) ? props.myNotes.map(note => {
                    return (
                        <Note key={note['_id']} idNum={note['_id']} title={note.title} textBody={note.textBody} />
                    )

                }) : <div>No Notes Found</div>
                }
            </div>
        </div>
    )
}


export default Notes;