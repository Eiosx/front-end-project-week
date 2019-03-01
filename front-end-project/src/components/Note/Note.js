import React from 'react';
import './Note.css';
import ViewNote from '../ViewNote/ViewNote';

const Note = props => {
    return(
        <div className="Note" onClick={
            <ViewNote title={props.title} textBody={props.textBody}/>
        }>
            <h3>{props.title}</h3>
            <p>{props.textBody}</p>
        </div>
    )
}

export default Note;