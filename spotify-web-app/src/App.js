import React from 'react';
import './index.css';

class App extends React.Component {
    displaySomeText() {
        return 'Hello there friends'
    }
    render() {
        return (
            <div>
                {this.displaySomeText()}
            </div>
        )
    }
}

export default App;