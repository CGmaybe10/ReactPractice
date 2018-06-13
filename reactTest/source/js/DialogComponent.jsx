import React from 'react';

import outLess from '../css/testLessModule.less';

class DialogComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dialogStyle: outLess.showDialogStyle,
        }

        this.hideAnotherDialog = this.hideAnotherDialog.bind(this);
    }

    hideAnotherDialog() {
        let dialog = document.getElementById('dialog');
        document.body.removeChild(dialog);
    }

    render() {
        return (
            <div className={this.state.dialogStyle}>
                <div>
                    <h4>这是一个对话框</h4>
                    <p>通过动态添加标签的方式实现的对话框</p>
                    <button onClick={this.hideAnotherDialog}>取消对话框</button>
                </div>
            </div>
        );
    }
}

export { DialogComponent }