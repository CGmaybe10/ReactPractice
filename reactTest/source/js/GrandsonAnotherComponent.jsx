import React from 'react';

/* 通过它测试如何向另一个兄弟组件传递数据 */
class GrandsonAnotherComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        console.log('从一个组件向另一个兄弟组件传递的数据：I am your brother');
        this.props.handMessage('I am your brother');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}>点击该按钮向另一个兄弟组件传递数据</button>
            </div>
        );
    }
}

export { GrandsonAnotherComponent }