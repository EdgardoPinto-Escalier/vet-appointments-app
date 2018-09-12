import React, { Component } from 'react';

class AppointmentsList extends Component {
  
  render() {
    return ( 
        <div className="card mt-5">
            <div className="card-body">
                <h3 className="card-title text-center">Manage Appointments Here</h3>
                <div className="lista-citas">
                    {Object.keys(this.props.appointments).map(appointment => (
                        
                    ))}
                </div>
            </div>
        </div>

     )
  }
}

export default AppointmentsList;