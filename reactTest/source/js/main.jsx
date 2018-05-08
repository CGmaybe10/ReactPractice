import React from 'react';
import ReactDOM from 'react-dom';
import { OuterHeader } from './OuterHeader.jsx';
import { NameForm } from './NameForm.jsx';
import { FlavorForm } from './FlavorForm.jsx';
import { Calculator } from './Calculator.jsx';
import { Application } from './Application.jsx';
import { StateComponent } from './StateComponent.jsx';
import { PropsComponent } from './PropsComponent.jsx';
import outCSS from '../css/inReact.css';//css module写法
import outLess from '../css/testLessModule.less';
import config from '../config/config.json';

// ccs in js写法
const test = {
    color: 'green',
}

class Qiang extends React.Component {
    handleClick() {
        console.log("moubiao", 'onClick---->');
    }

    render() {
        return (
            <div>
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
                <PropsComponent/>
                <PropsComponent name='这是传递的属性值'/>
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

ReactDOM.render(<Qiang />, document.getElementById('root'));