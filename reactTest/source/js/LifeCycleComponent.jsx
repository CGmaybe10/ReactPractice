import React from 'react';

/* 生命周期的演示函数，从上到下的顺序就是生命周期的顺序 */
class LifeCycleComponent extends React.Component {
    //Mounting(装载) 当组件实例被创建并将其插入 DOM 时，这些方法将被调用：
    /* 构造函数 */
    constructor(props) {
        super(props);
        console.log('构造函数---->');

        this.state = {
            stateName: 'life cycle'
        };
        this.handleClickOne = this.handleClickOne.bind(this);
        this.handleClickTwo = this.handleClickTwo.bind(this);
    }

    /* 挂载之前 */
    componentWillMount() {
        console.log('挂载之前---->');
    }

    /* 渲染 */
    render() {
        console.log('渲染中---->');
        return (
            <div>
                <h6>es6语法：</h6>
                <button onClick={this.handleClickOne}>点击更新状态，属性值: {this.state.stateName}</button>
                <button onClick={this.handleClickTwo}>点击不进行任何操作</button>
            </div>
        );
    }

    /* 挂载之后 */
    componentDidMount() {
        console.log('挂载之后---->');
    }

    //Updating(更新) 改变 props 或 state 可以触发更新事件。 在重新渲染组件时，这些方法将被调用：
    /* 已加载组件收到新的属性时调用 */
    componentWillReceiveProps() {
        console.log('接收到新的参数---->');
    }

    /* 组件判断是否重新渲染时调用 */
    shouldComponentUpdate() {
        console.log('判断是否需要重新渲染---->');
        //返回true时才会触发componentWillUpdate和componentDidUpdate
        return true;
        // return false;
    }

    /* 组件更新之前 */
    componentWillUpdate() {
        console.log('更新之前---->');
    }

    /* 渲染中
    render() {
        return (<div>render...</div>);
    }
    */

    /* 更新完成 */
    componentDidUpdate() {
        console.log('更新之后---->');
    }

    //Unmounting(卸载)
    /* 当一个组件从 DOM 中删除时，这个方法将被调用 */
    componentWillUnmount() {
        console.log('删除组件前---->');
    }

    handleClickOne() {
        console.log('handle click one---->');

        //设置状态后才能出发更新事件shouldComponentUpdate方法，否则不会
        this.setState({
            stateName: 'update life cycle'
        });
    }

    handleClickTwo() {
        console.log('handle click two---->');
    }
}

export { LifeCycleComponent };