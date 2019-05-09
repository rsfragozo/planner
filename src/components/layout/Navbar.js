import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = (props) => {
    const { auth, profile } = props;
    return (
        <nav className="nav-wrapper black great darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Planner</Link>
                {auth.uid ? <SignedInLinks profile={ profile } /> : <SignedOutLinks />}
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);