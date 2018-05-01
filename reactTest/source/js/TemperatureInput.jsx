import React from 'react';
import ReactDOM from 'react-dom';
import { BoilingVerdict } from './BoilingVerdict.jsx';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { temperature: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // this.setState({ temperature: event.target.value });
        this.props.onTemperatureChange(event.target.value);
    }

    render() {
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
                {/* <BoilingVerdict celsius={parseFloat(temperature)} /> */}
            </fieldset>
        );
    }
}

export { TemperatureInput }

