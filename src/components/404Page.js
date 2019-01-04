import React, { Component } from 'react';

export default class FourOFourPage extends Component {
    // When this component mounts signal the app that user is on a 404 route
    componentDidMount() {
        const setSignal = this.props.signal404;

        setSignal(true);
    }

    // When this component unmounts signal the app that user leaves a 404 route
    componentWillUnmount() {
        const setSignal = this.props.signal404;

        setSignal(false);
    }

    render() {
        return (
            <div className="404-page">
                <h3>Wrong page</h3>
                <p>
                    The page you're trying to visit doesn't exist<br></br>
                    Please use the buttons below to navigate.
                </p>
            </div>
        )
    }
}
