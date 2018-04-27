import React from 'react';
import ReactDOM from 'react-dom';
import { OuterHeader } from './OuterHeader.jsx';

class Qiang extends React.Component {
    handleClick() {
        console.log("moubiao", 'onClick---->');
    }

    render() {
        return (
            <div>
                <h1>qiang zhong qiang!</h1>
                <input type='button' value='button' onClick={this.handleClick} />
                <Toggle />
                <InnerHeader />
                <OuterHeader />
            </div>
        );
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.toggleClick = this.toggleClick.bind(this);
    }

    toggleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.toggleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

class InnerHeader extends React.Component {
    handleInnerBtClick(test) {
        console.log("this is inner bt click! " + test);
    }

    render() {
        return (
            <button onClick={this.handleInnerBtClick.bind(this, 'what?')}>inner bt</button>
        );
    }
};

ReactDOM.render(<Qiang />, document.getElementById('root'));