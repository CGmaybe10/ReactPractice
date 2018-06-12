import React from 'react';
import { GrandsonComponent } from './GrandsonComponent.jsx';

class FatherComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            childData: '无数据',
        }
    }

    handleChildMsg(msg) {
        console.log('收到了来自子控件的数据：' + msg);
        this.setState({
            childData: msg,
        });
    }

    render() {
        return (
            <div>
                <h4>这是父控件-传递的数据是：I am your father</h4>
                <p>等待子控件的数据：{this.state.childData}</p>
                <GrandsonComponent {...this.props} fatherData="I am your father" transferMsg={msg => this.handleChildMsg(msg)} />
            </div>
        );
    }
}

export { FatherComponent }