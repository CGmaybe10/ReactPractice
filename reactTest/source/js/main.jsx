import React from 'react';
import ReactDOM from 'react-dom';
import { OuterHeader } from './OuterHeader.jsx';
import { NameForm } from './NameForm.jsx';
import { FlavorForm } from './FlavorForm.jsx';
import { Calculator } from './Calculator.jsx';
import { Application } from './Application.jsx';
import { StateComponent } from './StateComponent.jsx';
import { PropsComponent } from './PropsComponent.jsx';
import { LifeCycleComponent } from './LifeCycleComponent.jsx';
import { UncontrolledComponent } from './UncontrolledComponent.jsx';
import { ControlledComponent } from './ControlledComponent.jsx';
import { ListComponent } from './ListComponent.jsx';
import { ChartTestComponent } from './ChartTestComponent.jsx';
import { GrandfatherComponent } from './GrandfatherComponent.jsx';
import { ChildOneComponent } from './ChildOneComponent.jsx';
import { ChildTwoComponent } from './ChildTwoComponent.jsx';
import { DialogComponent } from './DialogComponent.jsx';

import outCSS from '../css/inReact.css';//css module写法
import outLess from '../css/testLessModule.less';
import config from '../config/config.json';

var OldStateComponent = require('./OldStateComponent.jsx');
var OldPropsComponent = require('./OldPropsComponent.jsx');
var OldLifeCycleComponent = require('./OldLifeCycleComponent.jsx');

// ccs in js写法
const test = {
    color: 'green',
}

const numbers = [1, 3, 5, 7];

class Qiang extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dialogStyle: outLess.hideDialogStyle,
        }
        this.showDialog = this.showDialog.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
    }


    handleClick() {
        console.log("moubiao", 'onClick---->');
    }

    handConsoleInput(inputData) {
        console.log('----component accept input data = ' + inputData);
    }

    showDialog() {
        this.setState({
            dialogStyle: outLess.showDialogStyle,
        });
    }

    hideDialog() {
        this.setState({
            dialogStyle: outLess.hideDialogStyle,
        });
    }

    showAnotherDialog() {
        let dialog = document.createElement("div");
        dialog.setAttribute('id', 'dialog');
        document.body.appendChild(dialog);
        ReactDOM.render(<DialogComponent />, document.getElementById('dialog'));
    }

    render() {
        return (
            <div>
                <div className={outLess.reactRoot}>
                    <div className={outLess.reactGroup}>
                        <h1 style={test}>{config.greetText}</h1>
                        <h1 className={outCSS.title}>mudule css test</h1>
                        <h1 className={outLess.lessModule}>moudle less test</h1>
                        <input type='button' value='button' onClick={this.handleClick} />
                        <Toggle />
                        <InnerHeader />
                        <OuterHeader />
                        <NameForm />
                        <FlavorForm />
                        <Calculator />
                        <Application />
                        <StateComponent />
                        <PropsComponent />
                        <PropsComponent name='这是传递的属性值' />
                        <OldStateComponent />
                        <OldPropsComponent />
                        <OldPropsComponent myProps="diy props" />
                        <LifeCycleComponent />
                        <OldLifeCycleComponent />
                        <UncontrolledComponent />
                        <ControlledComponent />
                        <ListComponent numbers={numbers} />
                    </div>
                    <div className={outLess.reactGroup}>
                        <ChartTestComponent />
                    </div>
                </div>
                <h3>组件间相互通信：</h3>
                <GrandfatherComponent rootData="这是root数据" />
                <ChildOneComponent />
                <ChildTwoComponent />
                <div>
                    <button onClick={this.showDialog}>显示对话框(设置可见性的方式)</button>
                </div>
                <div>
                    <button onClick={this.showAnotherDialog}>显示对话框(动态添加标签的方式)</button>
                </div>
                <div className={this.state.dialogStyle}>
                    <div>
                        <h4>这是一个对话框</h4>
                        <p>通过设置可见性的方式实现的对话框</p>
                        <button onClick={this.hideDialog}>取消对话框</button>
                    </div>
                </div>
            </div>
        );
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.toggleClick = this.toggleClick.bind(this);
    }

    toggleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.toggleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

class InnerHeader extends React.Component {
    handleInnerBtClick(test) {
        console.log("this is inner bt click! " + test);
    }

    render() {
        return (
            <button onClick={this.handleInnerBtClick.bind(this, 'what?')}>inner bt</button>
        );
    }
};

let MainDOM = ReactDOM.render(<Qiang />, document.getElementById('root'));

window.setDebugInfo = function (consoleData) {
    console.log('----console input data = ' + consoleData);
    MainDOM.handConsoleInput(consoleData);
};