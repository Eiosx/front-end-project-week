import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './DeleteNote.css';

const DeleteNote = props => {


    return (
        <div className="DeleteContainer">
            <h4>Are you sure you want to delete this?</h4>
            <Link to={`/`}>
                <Button color="danger" onClick={(event) => {
                    return props.handleDelete(event, props.match.params.id)
                }}>Delete</Button>
            </Link>

            <Link to={`/`}>
                <Button color="info" >No</Button>
            </Link>
        </div>
    )
}

export default DeleteNote;