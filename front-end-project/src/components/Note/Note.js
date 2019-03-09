import React from 'react';
import './Note.css';

import { Link } from 'react-router-dom';


const Note = props => {
    return (
        <div className="Note" >
            <Link className="Link" to={`/${props.idNum}`}>
                <h3>{props.title}</h3>
                <p>{props.textBody}</p>
            </Link>
        </div>
    )
}

export default Note;