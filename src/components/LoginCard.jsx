import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const LoginCard = (props) => {
    return (
        <div className={css(styles.card)}>
            {props.children}
        </div>
    );
}

const styles = StyleSheet.create({
    card: {
        background: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        margin: 'auto',
        borderRadius: 2,
        minHeight: 400,
        minWidth: 600,
        height: 400,
        width: 600,
        boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 4px rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)',
    }
});

export default LoginCard;