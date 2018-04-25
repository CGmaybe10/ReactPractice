import React from 'react';
import ReactDOM from 'react-dom';

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
            </div>
        )
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

ReactDOM.render(<Qiang />, document.getElementById('root'));