import React from 'react';
import eventProxy from './uitl/eventProxy.jsx'

class ChildOneComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handOnClick = this.handOnClick.bind(this);
    }

    handOnClick() {
        let msg = 'I am from another component';
        console.log('观察者模式传递的数据：' + msg);
        eventProxy.trigger('msg', msg);
    }

    render() {
        return (
            <div>
                <button onClick={this.handOnClick}>点击该按钮通过观察者模式和另一个组件通信</button>
            </div>
        );
    }
}

export { ChildOneComponent }