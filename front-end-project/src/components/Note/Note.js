import React from 'react';
import './Note.css';
import ViewNote from '../ViewNote/ViewNote';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

const Note = props => {
    return (
        <div className="Note" >
            <Link to={`${props.idNum}`}>
                <h3>{props.title}</h3>
                <p>{props.textBody}</p>
            </Link>
            {/* <Route path={`/${props.idNum}`} render={() => (<ViewNote idNum={props.idNum} title={props.title} textBody={props.textBody} />)} /> */}
        </div>
    )
}

export default Note;