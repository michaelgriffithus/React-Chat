import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Message from '../models/message';
import { sendMessage } from '../redux/actions';
import { getStorage } from '../data/Storage';

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };
    }

    componentWillMount() {
        window.addEventListener('keypress', event => {
            if (event.keyCode === 13) {
                this.onSubmit(event);
            }
        });
    }

    onSubmit = event => {
        event.preventDefault();
        const user = getStorage('username');
        this.props.sendMessage(new Message(user, this.state.message));
        this.setState({ message: '' });
    }

    onInputChange = ({ target: { value }}) => {
        this.setState({ message: value });
    }
    
    render() {
        return (
            <footer className={css(styles.footerStyle)}>
                <form
                    onSubmit={event => this.onSubmit(event)}
                    className={css(styles.formStyle)}
                >
                    <TextField
                        hintText="Send message"
                        value={this.state.message}
                        onChange={event => this.onInputChange(event)}
                        fullWidth={true}
                        multiLine={true}
                    />
                </form>
            </footer>
        );
    }
}

const styles = StyleSheet.create({
    footerStyle: {
        position: 'absolute',
        bottom: 12,
        left: 24,
        right: 24,
    },
    formStyle: {
        display: 'flex',
        width: '100%',
    }
});

export default connect(null, { sendMessage })(Footer);

