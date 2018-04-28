import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            testState: 'test state'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log("state value = " + this.state.value + " testState = " + this.state.testState);
    }

    handleSubmit(event) {
        alert('A name is submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type='text' value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type='submit' value='Submit' />
            </form>
        );
    }
}

export { NameForm }