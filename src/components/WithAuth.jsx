import React from 'react';
import { Redirect } from 'react-router-dom';
import { getStorage } from '../data/Storage';

const WithAuth = (WrappedComponent) => {
    return class extends React.Component {

        render() {
            switch (getStorage('username')) {
                case undefined:
                    return <Redirect to='/login' />;
                case null:
                    return <Redirect to='/login' />;
                default:
                    return <WrappedComponent {...this.props} />;
            }
        }
    };
}

export default WithAuth;