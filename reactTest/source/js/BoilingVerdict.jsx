import React from 'react';
import ReactDom from 'react-dom';

class BoilingVerdict extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log("celsius = " + this.props.celsius);
        if (this.props.celsius >= 100) {
            return <p>水会烧开</p>;
        } else {
            return <p>水不会烧开</p>;
        }
    }
}

export { BoilingVerdict }