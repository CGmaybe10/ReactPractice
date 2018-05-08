import React from 'react';

/* 拥有默认状态的组件 */
class StateComponent extends React.Component {
    constructor(props) {
        super(props);

        // 构造函数是唯一可以分配 this.state 的地方，默认的状态
        this.state = {
            myTip: '演示一个拥有状态的组件，状态值是：',
            myState: '相信过程'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            myState: '新状态!',
            newState: '发爽肤水地方'
        });
    }

    render() {
        return (
            <div>
                <p>
                    {this.state.myTip}
                    <br />
                    <strong>{this.state.myState}</strong>
                </p>
                <button onClick={this.handleClick}>点击更新状态</button>
            </div>
        );
    }
}

export { StateComponent };