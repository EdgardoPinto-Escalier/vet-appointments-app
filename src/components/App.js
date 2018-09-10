import React, { Component } from 'react';
import Header from './Header';
import AddAppointment from './AddAppointment';
import AppointmentsList from './AppointmentsList';



class App extends Component {

  state = {
    appointments: {}
  }

  createAppointment = dataAppointment => {

    // Next we get a copy of the state
    const appointments = {...this.state.citas};

    // Here we add it to the current state
    appointments[`appointments${Date.now()}`] = dataAppointment;

    // Set to the state
    this.setState({
      appointments
    })
  }

  render() {
    return (
      <div className="container">
        <Header
          title="VET APPOINTMENTS APP"
        />

        <div className="row">
          <div className="col-md-6">
            <AddAppointment 
                createAppointment={this.createAppointment}
            />
          </div>
          <div className="col-md-6">
              <AppointmentsList

              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
