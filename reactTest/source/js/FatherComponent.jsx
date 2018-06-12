import React from 'react';
import { GrandsonComponent } from './GrandsonComponent.jsx';

class FatherComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>这是父控件-传递的数据是：I am your father</h4>
                <GrandsonComponent {...this.props} fatherData="I am your father" />
            </div>
        );
    }
}

export { FatherComponent }