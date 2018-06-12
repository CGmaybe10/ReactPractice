import React from 'react';

class GrandsonComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>这是孙子控件</h4>
                <p>来自父控件的数据: {this.props.fatherData}</p>
                <p>来自祖父控件的数据：{this.props.grandfatherData}</p>
                <p>来自root控件的数据：{this.props.rootData}</p>
            </div>
        );
    }
}

export { GrandsonComponent }