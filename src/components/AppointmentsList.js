import React, { Component } from 'react';
import Appointment from './Appointment';

class AppointmentsList extends Component {
  
  render() {
    return ( 
        <div className="card mt-5">
            <div className="card-body">
                <h3 className="card-title text-center">Manage Appointments Here</h3>
                <div className="lista-citas">
                    {Object.keys(this.props.appointments).map(appointment => (
                        <Appointment
                            key={appointment}
                            info={ this.props.appointments[appointment] }
                        />
                    ))}
                </div>
            </div>
        </div>

     )
  }
}

export default AppointmentsList;