import React from 'react';
import { FatherComponent } from './FatherComponent.jsx';

class GrandfatherComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>这是祖父控件-传递的数据是：I am your grandfather</h4>
                <FatherComponent {...this.props} grandfatherData="I am your grandfather" />
            </div>
        );
    }
}

export { GrandfatherComponent }