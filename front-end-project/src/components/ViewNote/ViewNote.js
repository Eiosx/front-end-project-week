import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './ViewNote.css';

class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {note: {}};
    }

    componentDidMount(){
        axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
        .then(response => {
            console.log(response.data)
            this.setState({note: response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {


        return (
            <div className="ViewContainer">
            <div className=""></div>
                <Link to={`/${this.state.note['_id']}/edit`}>edit </Link>
                <Link to={`/${this.state.note['_id']}/delete`}>delete</Link>
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.textBody}</p>
            </div>
        )
    }
}

export default ViewNote;