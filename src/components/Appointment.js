import React, { Component } from 'react';

class Appointment extends Component {
  
  render() {
    const { date, time, pet, owner, symptoms} = this.props.info;
    return (
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">{pet}</h3>
                <p className="card-text">Owner Name: <span>{owner}</span></p>
                <p className="card-text">Date: <span>{date}</span></p>
                <p className="card-text">Time: <span>{time}</span></p>
                <p className="card-text">Symptoms: <span>{symptoms}</span></p>
            </div>
        </div>
    )
  }
}

export default Appointment;