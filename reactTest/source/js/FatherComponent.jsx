import React from 'react';
import { GrandsonComponent } from './GrandsonComponent.jsx';
import { GrandsonAnotherComponent } from './GrandsonAnotherComponent.jsx';

/* 通过它测试如何和子组件通信，两个兄弟组件如何通信 */
class FatherComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            childData: '无数据',
            anotherBrotherData: '无数据',
        }

        this.handMessage = this.handMessage.bind(this);
    }

    handleChildMsg(msg) {
        console.log('收到了来自子控件的数据：' + msg);
        this.setState({
            childData: msg,
        });
    }

    handMessage(brotherMsg) {
        console.log('父控件收到来自子控件的消息，并将它传给另一个子控件: ' + brotherMsg);
        this.setState({
            anotherBrotherData: brotherMsg,
        });
    }

    render() {
        return (
            <div>
                <h4>这是父控件-传递的数据是：I am your father</h4>
                <p>等待子控件的数据：{this.state.childData}</p>
                <GrandsonComponent {...this.props} fatherData="I am your father"
                    transferMsg={msg => this.handleChildMsg(msg)}
                    brotherData={this.state.anotherBrotherData} />
                <GrandsonAnotherComponent handMessage={this.handMessage} />
            </div>
        );
    }
}

export { FatherComponent }