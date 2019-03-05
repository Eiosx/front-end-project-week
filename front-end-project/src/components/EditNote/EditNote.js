import React from 'react';

const EditNote = props => {
    return(
        <div>
            <h2>Edit Note:</h2>
            <form>
                <input type="text" placeholder="Note Title"/>
                <input type="text" placeholder="Note Content"/>
            </form>
        </div>
    )
}

export default EditNote;