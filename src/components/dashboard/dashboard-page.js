import React, { Component } from 'react';

import Event from '../event/event';

class DashBoard extends Component {

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Event/>
            </div>
        );
    }

}

export default DashBoard;
