import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Chat from './Chat';

const App = (props) => {

    return (
        <div>
            <Header showMenuIcon={false} />
            <Chat />
            <Footer />
        </div>
    );
}

export default App;