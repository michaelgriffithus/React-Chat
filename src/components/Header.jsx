import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

const Header = props => {
    return (
        <AppBar title="Chat" showMenuIconButton={props.showMenuIcon} />
    );
}

Header.propTypes = {
    showMenuIcon: PropTypes.bool.isRequired
};

export default Header;