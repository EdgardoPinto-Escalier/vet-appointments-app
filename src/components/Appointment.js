import React, { Component } from 'react';

class Appointment extends Component {
  
  render() {
    const { date, time, pet, owner, symptoms} = this.props.info;
    return (
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">{pet}</h3>
                <p className="card-text"><span>Owner Name: </span>{owner}</p>
                <p className="card-text"><span>Date: </span>{date}</p>
                <p className="card-text"><span>Time: </span>{time}</p>
                <p className="card-text"><span>Symptoms: </span><br />{symptoms}</p>
                <button className="btn btn-danger">Erase &times;

                </button>
            </div>
        </div>
    )
  }
}

export default Appointment;