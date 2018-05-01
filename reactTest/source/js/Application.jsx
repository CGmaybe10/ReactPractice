import React from 'react';
import { SplitPane } from './SplitPane.jsx';
import { Contacts } from './Contacts.jsx';
import { Chat } from './Chat.jsx';

class Application extends React.Component {
    render() {
        return (
            <SplitPane
                left={
                    <Contacts />
                }
                right={
                    <Chat />
                } />
        );
    }
}

export { Application };