import React from 'react';

/* 孙子组件，通过它测试如何接受父组件、祖父组件和兄弟组件的数据， 及如何向父组件传递数据*/
class GrandsonComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let sonData = 'I am a child';
        console.log('子控件传递的数据是：' + sonData);

        this.props.transferMsg(sonData);
    }

    render() {
        return (
            <div>
                <h4>这是孙子控件</h4>
                <p>来自父控件的数据: {this.props.fatherData}</p>
                <p>来自祖父控件的数据：{this.props.grandfatherData}</p>
                <p>来自root控件的数据：{this.props.rootData}</p>
                <p>来自兄弟控件的数据：{this.props.brotherData}</p>
                <button onClick={this.handleClick}>按这个按钮向父控件传递数据</button>
            </div>
        );
    }
}

export { GrandsonComponent }