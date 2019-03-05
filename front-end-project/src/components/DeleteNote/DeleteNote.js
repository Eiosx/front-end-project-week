import React from 'react';

const DeleteNote = props => {
    return(
        <div>
            <h4>Are you sure you want to delete this?</h4>
            <button>Delete</button>
            <button>No</button>
        </div>
    )
}

export default DeleteNote;