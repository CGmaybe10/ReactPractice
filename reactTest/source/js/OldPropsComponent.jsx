var React = require('react');
var createReactClass = require('create-react-class');

var OldPropsComponent = createReactClass({
    getDefaultProps: function () {
        return {
            myProps: 'default props'
        };
    },

    render: function () {
        return (
            <div>
                不使用ES6时创建的带有自定义的默认属性的组件,
               默认属性：{this.props.myProps}
            </div>
        );
    }
});

module.exports = OldPropsComponent;