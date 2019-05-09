import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOut } from '../../store/actions/authActions';


const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><Link to='#' onClick={props.signOut}>Log out</Link></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>RF</NavLink></li>
        </ul>
    );
}

const mapDispatchtoProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchtoProps)(SignedInLinks);