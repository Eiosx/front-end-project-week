import React from 'react';
import { Route } from 'react-router-dom';

import './Notes.css';
import Note from '../Note/Note';
import ViewNote from '../ViewNote/ViewNote';
import EditNote from '../EditNote/EditNote';
import DeleteNote from '../DeleteNote/DeleteNote';


const Notes = props => {

    return (
        <div>
            <h2>Your Notes:</h2>
            {(props.myNotes) ? props.myNotes.map(note => {
                return (
                    <div>
                        <Note key={note['_id']} idNum={note['_id']} title={note.title} textBody={note.textBody} />
                        <Route exact path={`/${note['_id']}`} render={() => (<ViewNote idNum={note['_id']} title={note.title} textBody={note.textBody} />)} />
                        <Route exact path={`/${note['_id']}/edit`} render={() => (<EditNote idNum={note['_id']} note={note} handleUpdate={props.handleUpdate} />)} />
                        <Route exact path={`/${note['_id']}/delete`} render={() => (<DeleteNote idNum={note['_id']} handleDelete={props.handleDelete} />)} />
                    </div>)

            }) : <div>No Notes Found</div>
            }
        </div>
    )
}


export default Notes;