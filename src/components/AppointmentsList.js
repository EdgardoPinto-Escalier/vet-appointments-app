import React, { Component } from 'react';
import Appointment from './Appointment';

class AppointmentsList extends Component {
  
  render() {
    const appointments = this.props.appointments;
    const message = Object.keys(appointments).length === 0 ? 'No Appointments' : 'Manage Appointments Here';

    return ( 
        <div className="card mt-5">
            <div className="card-body">
                <h3 className="card-title text-center">{message}</h3>
                <div className="lista-citas">
                    {Object.keys(this.props.appointments).map(appointment => (
                        <Appointment
                            key={ appointment }
                            appointmentId={ appointment }
                            info={ this.props.appointments[appointment] }
                            eraseAppointment={ this.props.eraseAppointment }
                        />
                    ))}
                </div>
            </div>
        </div>

     )
  }
}

export default AppointmentsList;