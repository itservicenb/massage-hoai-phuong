import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Booking extends Component {
    render() {
        return (
            <div>
                <Iframe url="https://app.acuityscheduling.com/schedule.php?owner=15519334" />
            </div>
        );
    }
}
export default Booking;
