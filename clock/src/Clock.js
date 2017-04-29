import React, { Component } from 'react';
import './App.css';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.incrementDate = this.incrementDate.bind(this);
        this.state = {
            date : '',
            time : '',
        };
    }

    displayTime() {
        const a = setInterval(this.incrementDate, 1000);
    }
    
    incrementDate() {
        let d = new Date();
        console.log(d.getHours());
        this.setState({
            date : d.toLocaleDateString(),
            time : d.toLocaleTimeString(),

        });
    }


    render() {
        return(
            <div>
                {this.displayTime()}
                <table>
                    <tr>
                        <td>
                            <div className="title">
                                DATE:
                            </div>
                        </td>
                        <td>
                            <div className="title">
                                TIME:
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="date">
                                {this.state.date}
                            </div>
                        </td>
                        <td>
                            <div className="time">
                                {this.state.time}
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}