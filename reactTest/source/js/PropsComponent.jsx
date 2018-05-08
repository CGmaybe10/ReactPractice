import React from 'react';

/* 拥有默认属性的组件 */
class PropsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>属性名是：{this.props.name}</div>
        );
    }
}

//定义默认的属性
PropsComponent.defaultProps = {
    name: '这是默认的属性值'
}

export { PropsComponent };