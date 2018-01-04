import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import MessageIcon from 'material-ui/svg-icons/communication/message';
import uuidv4 from 'uuid/v4';

class Chat extends Component {
    componentDidMount() {
        console.log("Mounted");
        this.props.setUser();
    }

    renderMessages() {
        const { messages } = this.props;
        return Object.keys(messages).map(key => {
            const message = messages[key];
            return (
                <ListItem
                    key={message.id}
                    primaryText={`${message.user} - ${message.time}`}
                    secondaryText={message.content}
                    leftIcon={<MessageIcon />}
                />
            ); 
        });
    }


    render() {
        return (
            <List style={{ minHeight: '84vh', maxHeight: '84vh', overflowY: 'scroll' }}>
                {this.renderMessages()}
            </List>
        );
    }
}

function setUser() {
    return {
        type: 'set_user',
        user: { id: uuidv4(), nickname: 'Nesho' }
    };
}

const mapStateToProps = state => {
    return { messages: state.messages };
}

export default connect(mapStateToProps, { setUser })(Chat);