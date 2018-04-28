import React from 'react';
import ReactDOM from 'react-dom';
import { BoilingVerdict } from './BoilingVerdict.jsx';
import { TemperatureInput } from './TemperatureInput.jsx';
import { toCelsius, toFahrenheit } from './uitl/Util.jsx';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            temperature: e.target.value
        });
    }

    tryConvert(){
        
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <div>
                <TemperatureInput scale='c' />
                <TemperatureInput scale='f' />
            </div>
        );
    }
}

export { Calculator }