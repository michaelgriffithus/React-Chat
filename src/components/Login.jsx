import React, { Component } from 'react';
import LoginCard from './LoginCard';
import TextField from 'material-ui/TextField';
import PersonIcon from 'material-ui/svg-icons/social/person';
import RaisedButton from 'material-ui/RaisedButton';
import { StyleSheet, css } from 'aphrodite';
import { setStorage } from '../data/Storage';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = { username: '' };

        console.log(props);
    }

    onInputChange = ({ target: { value }}) => {
        this.setState({ username: value });
    }

    handleSubmit = event => {
        event.preventDefault();

        setStorage("username", this.state.username);
        this.props.history.push('/chat');
    }

    login = () => {
        setStorage("username", this.state.username);
        this.props.history.push('/chat');
    }

    render() {
        return (
            <LoginCard>
                <header className={css(styles.headerStyle)}>
                    <h1 className={css(styles.titleStyle)}>Sign in</h1>
                </header>

                <form onSubmit={event => this.handleSubmit(event)} className={css(styles.formStyle)}>
                    <TextField
                        floatingLabelText="Your awesome username"
                        fullWidth
                        value={this.state.username}
                        onChange={event => this.onInputChange(event)}
                        style={ownStyles.inputStyle}
                    />

                    <RaisedButton type="submit" label="Log in" primary style={ownStyles.buttonStyle} onClick={this.login} />
                </form>
            </LoginCard>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0px',
        width: '100%'
    },
    titleStyle: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 300,
        fontSize: 40,
        textAlign: 'center'
    },
    formStyle: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 12,
        paddingRight: 12,
        height: '100%'
    }
});

const ownStyles = {
    buttonStyle: {
        width: 150,
        height: 50,
        marginLeft: 'auto',
        position: 'absolute',
        bottom: 12,
        right: 12
    },
    inputStyle: {
        transform: 'translateY(100%)'
    }
};

export default Login;