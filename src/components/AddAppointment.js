import React, { Component } from 'react';

class AddAppointment extends Component {

  createNewAppointment = (e) => {
    e.preventDefault();
    
  }

  render() {
    return(
    <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-4"><i class="fas fa-clipboard-check"></i> Add New Appointment</h2>
                <form onSubmit={this.createNewAppointment}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-4 col-form-label"><i class="fas fa-paw"></i> Pet Name</label>
                        <div className="col-sm-8 col-lg-12">
                            <input type="text" className="form-control" placeholder="Pet Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-4 col-form-label"><i class="fas fa-user-circle"></i> Owner Name</label>
                        <div className="col-sm-8 col-lg-12">
                            <input type="text" className="form-control"  placeholder="Owner Name" />
                        </div>
                    </div>

                     <div className="form-group row">
                        <label className="col-sm-4 col-lg-6 col-form-label"><i class="far fa-calendar-alt"></i> Date</label>
                        <div className="col-sm-8 col-lg-6  mb-4 mb-lg-2">
                            <input type="date" className="form-control" />
                        </div>

                        <label className="col-sm-4 col-lg-6 col-form-label"><i class="far fa-clock"></i> Time</label>
                        <div className="col-sm-8 col-lg-6">
                            <input type="time" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-6 col-form-label"><i class="fas fa-user-md"></i> Symptoms</label>
                        <div className="col-sm-8 col-lg-12">
                            <textarea  className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-5">
                            <button type="submit" className="btn btn-primary w-100"><i class="fas fa-clipboard-check"></i> Add Appointment</button>
                        </div>
                    </div>
                </form>
            </div>
    </div>
    )
}

}

export default AddAppointment;