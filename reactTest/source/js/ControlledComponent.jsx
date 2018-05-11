import React from 'react';

/* 受控组件
   在大多数情况下，推荐使用受控组件来实现表单。
   在受控组件中，表单数据由 React 组件负责处理。
   不受控组件中，表单数据由 DOM 元素本身处理。
 */
class ControlledComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value='Submit' />
            </form>
        );
    }
}

export { ControlledComponent };