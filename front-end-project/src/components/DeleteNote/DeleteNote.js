import React from 'react';
import { Link } from 'react-router-dom';

const DeleteNote = props => {


    return (
        <div>
            <h4>Are you sure you want to delete this?</h4>
            <Link to={`/`}>
                <button onClick={(event) => {
                    return props.handleDelete(event, props.match.params.id)
                }}>Delete</button>
            </Link>

            <Link to={`/`}>
                <button>No</button>
            </Link>
        </div>
    )
}

export default DeleteNote;