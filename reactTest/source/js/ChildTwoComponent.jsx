import React from 'react';
import eventProxy from './uitl/eventProxy.jsx';

class ChildTwoComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: '无数据',
        }
        let test = "testData";
        eventProxy.on('msg', msg => {
            console.log('通过观察者模式从另一个组件接收到的数据：' + msg);
            this.setState({
                msg,
            });
        });
    }

    render() {
        return (
            <div>
                通过观察者模式从另一个组件接收到的数据：{this.state.msg}
            </div>
        );
    }
}

export { ChildTwoComponent }