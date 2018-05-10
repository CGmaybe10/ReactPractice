var React = require('react');
var createReactClass = require('create-react-class');

var OldStateComponent = createReactClass({
    getInitialState: function () {
        return {
            oldStateName: 'old default state'
        };
    },

    handleClick: function () {
        this.setState({
            oldStateName: 'new old state'
        });
    },

    render: function () {
        return (
            <div>
                <p>{this.state.oldStateName}</p>
                <button onClick={this.handleClick}>不使用ES6时创建的带有默认状态的组件:</button>
            </div>
        );
    }
});

module.exports = OldStateComponent;