import React from 'react';

class SplitPane extends React.Component {
    render() {
        return (
            <div className="SplitPane">
                <div className="SplitPane-left">
                    {this.props.left}
                </div>
                <div className="SplitPane-right">
                    {this.props.right}
                </div>
            </div>
        );
    }
}

export { SplitPane };