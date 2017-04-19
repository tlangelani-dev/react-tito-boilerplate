import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

// define default properties
App.defaultProps = {
    heading: 'Default Heading'
};

// define expected property types
App.propTypes = {
    heading: PropTypes.string
};

export default App;
