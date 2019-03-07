import React from 'react';
import { Link } from 'react-router-dom';
// import { Route } from 'react-router-dom';

// import EditNote from '../EditNote/EditNote';

const ViewNote = props =>{
    return(
        <div>
            <Link to={`/${props.idNum}/edit`}>edit </Link>
            <Link to={`/${props.idNum}/delete`}>delete</Link>
            <h2>{props.title}</h2>
            <p>{props.textBody}</p>
        </div>
    )
}

export default ViewNote;