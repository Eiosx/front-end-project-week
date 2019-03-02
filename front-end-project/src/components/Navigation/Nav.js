import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="Nav">
            <h1 className="navTitle">Lambda <br />Notes</h1>
            <nav>
                <Link to="/">
                    <button>View Your Notes</button>
                </Link>

                <Link to="/create">
                    <button>+Create New Notes</button>
                </Link>
            </nav>
        </div>
    )
}

export default Nav;