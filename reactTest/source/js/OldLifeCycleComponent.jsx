var React = require('react');
var createReactClass = require('create-react-class');

var OldLifeCycleComponent = createReactClass({
    getInitialState: function () {
        return {
            stateName: 'old default state'
        };
    },

    //Mounting(装载) 当组件实例被创建并将其插入 DOM 时，这些方法将被调用：
    /* 挂载之前 */
    componentWillMount: function () {
        console.log('old 挂载之前---->');
    },

    /* 渲染 */
    render: function () {
        console.log('old 渲染中---->');
        return (
            <div>
                <h6>老语法实现的：</h6>
                <button onClick={this.handleClickOne}>点击更新状态，属性值: {this.state.stateName}</button>
                <button onClick={this.handleClickTwo}>点击不进行任何操作</button>
            </div>
        );
    },

    /* 挂载之后 */
    componentDidMount: function () {
        console.log('old 挂载之后---->');
    },

    //Updating(更新) 改变 props 或 state 可以触发更新事件。 在重新渲染组件时，这些方法将被调用：
    /* 已加载组件收到新的属性时调用 */
    componentWillReceiveProps: function(){
        console.log('old 接收到新的参数---->');
    },

    /* 组件判断是否重新渲染时调用 */
    shouldComponentUpdate: function(){
        console.log('old 判断是否需要重新渲染---->');
        return true;
        // return false;
    },

    /* 组件更新之前 */
    componentWillUpdate: function(){
        console.log('old 更新之前---->');
    },

    /* 渲染中
     render: function(){
        return (<div></div>);
    },
     */

    /* 更新完成 */
    componentDidUpdate: function(){
        console.log('old 更新之后---->');
    },

    //Unmounting(卸载)
    /* 当一个组件从 DOM 中删除时，这个方法将被调用 */
    componentWillUnmount: function(){
        console.log('old 删除组件前---->');
    },

    handleClickOne: function(){
        console.log('old handle click one---->');
        this.setState({
            stateName: 'update life cycle'
        });
    },

    handleClickTwo: function(){
        console.log('old handle click two---->');
    }
});

module.exports = OldLifeCycleComponent;