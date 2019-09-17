import React, { Component } from 'react';
import './MainContainer.css';

class MainContainer extends Component {
    render() {
        return (
            <div className="mainContainer">
                {this.props.children}
            </div>
        );

    }
}

export default MainContainer