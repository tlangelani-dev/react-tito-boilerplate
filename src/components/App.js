import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="rc-app">
                <h1>{this.props.heading}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nesciunt ab, voluptates cupiditate ea repudiandae placeat, soluta, deserunt ipsam explicabo ipsum quidem ad sequi? Nemo cumque illum et nostrum repudiandae.
                </p>
            </div>
        );
    }
}

export default App;
