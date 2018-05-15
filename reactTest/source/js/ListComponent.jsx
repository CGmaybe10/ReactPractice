import React from 'react';

let numbers;
let listItems;

class ListComponent extends React.Component {

    constructor(props) {
        super(props);

        numbers = this.props.numbers;
        listItems = numbers.map((number) =>
            <li key={number.toString()}>
                {number}
            </li>
        );
    }

    render() {
        return (
            <ul>
                <li>start</li>
                {listItems}
                <li>end</li>
            </ul>
        );
    }
}

export { ListComponent };