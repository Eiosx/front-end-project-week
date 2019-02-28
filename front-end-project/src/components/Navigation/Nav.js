import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <div className="Nav">
            <h1 className="navTitle">Lambda <br/>Notes</h1>
            <nav>
                <button>View Your Notes</button>
                <button>+Create New Notes</button>
            </nav>
        </div>
    )
}

export default Nav;