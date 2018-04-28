import React from 'react';
import RectDOM from 'react-dom';

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'coconut'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value='grapefruit'>Grapefruit</option>
                    <option value='lime'>Lime</option>
                    <option value='coconut'>Coconut</option>
                    <option value='mango'>Mango</option>
                </select>
                <input type='submit' value='Sumbit' />
            </form>
        );
    }
}

export { FlavorForm };