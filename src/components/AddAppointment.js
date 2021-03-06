import React, { Component } from 'react';

class AddAppointment extends Component {

    petNameRef = React.createRef();
    ownerNameRef = React.createRef();
    dateRef = React.createRef();
    timeRef = React.createRef();
    symptomsRef = React.createRef();

  createNewAppointment = (e) => {
    e.preventDefault();

    // First we create the object.
    const newAppointment = {
        pet: this.petNameRef.current.value,
        owner: this.ownerNameRef.current.value,
        date: this.dateRef.current.value,
        time: this.timeRef.current.value,
        symptoms: this.symptomsRef.current.value
    }

    // Here we send the object via props
    this.props.createAppointment(newAppointment);

    // Finally we reset the form
    e.currentTarget.reset();
    
  }

  render() {
    return(
    <div className="card mt-5">
            <div className="card-body">
                <h3 className="card-title text-center mb-4"><i className="fas fa-clipboard-check"></i> Add New Appointment</h3>
                <form onSubmit={this.createNewAppointment}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-4 col-form-label"><i className="fas fa-paw"></i> Pet Name</label>
                        <div className="col-sm-8 col-lg-12">
                            <input ref={this.petNameRef} type="text" className="form-control" placeholder="Pet Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-4 col-form-label"><i className="fas fa-user-circle"></i> Owner Name</label>
                        <div className="col-sm-8 col-lg-12">
                            <input ref={this.ownerNameRef} type="text" className="form-control"  placeholder="Owner Name" />
                        </div>
                    </div>

                     <div className="form-group row">
                        <label className="col-sm-4 col-lg-6 col-form-label"><i className="far fa-calendar-alt"></i> Date</label>
                        <div className="col-sm-8 col-lg-6  mb-4 mb-lg-2">
                            <input ref={this.dateRef} type="date" className="form-control" />
                        </div>

                        <label className="col-sm-4 col-lg-6 col-form-label"><i className="far fa-clock"></i> Time</label>
                        <div className="col-sm-8 col-lg-6">
                            <input ref={this.timeRef} type="time" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-6 col-form-label"><i className="fas fa-user-md"></i> Symptoms</label>
                        <div className="col-sm-8 col-lg-12">
                            <textarea ref={this.symptomsRef} className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-5">
                            <button type="submit" className="btn btn-primary w-100"><i className="fas fa-clipboard-check"></i> Add Appointment</button>
                        </div>
                    </div>
                </form>
            </div>
    </div>
    )
}

}

export default AddAppointment;