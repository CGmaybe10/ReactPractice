import React from 'react';

/* 非受控组件
   在大多数情况下，推荐使用受控组件来实现表单。
   在受控组件中，表单数据由 React 组件负责处理。
   不受控组件中，表单数据由 DOM 元素本身处理。
 */
class UncontrolledComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted:  ' + this.textInput.value);
        event.preventDefault();//如果没有这句事件会往下传递，导致刷新页面
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type='text' ref={(input) => this.textInput = input} />
                </label>
                <input type='submit' value='Submit' />
            </form>
        );
    }
}

export { UncontrolledComponent };