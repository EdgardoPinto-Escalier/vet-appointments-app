import React, { Component } from 'react';
import Header from './Header';
import AddAppointment from './AddAppointment';



class App extends Component {
  render() {
    return (
      <div className="container">
        <Header
          title="VET APPOINTMENTS APP"
        />

        <div className="row">
          <div className="col-md-6">
            <AddAppointment 
            
            />
          </div>
          <div className="col-md-6">
            2
          </div>
        </div>
      </div>
    );
  }
}

export default App;
