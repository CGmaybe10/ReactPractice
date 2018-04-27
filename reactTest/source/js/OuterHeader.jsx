import React from 'react';
import ReactDOM from 'react-dom';

class OuterHeader extends React.Component {
    handOutBtClick(name, e) {
        console.log("this is out bt click! " + name);
    }

    render() {
        return (
            <button onClick={this.handOutBtClick.bind(this, 'cymaybe10')}>out bt</button>
        );
    }
};

export { OuterHeader };
// export { OuterHeader as MyOuterHeader };