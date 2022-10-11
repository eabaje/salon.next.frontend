import React from "react";

function Reservation() {
  return (
    <>
      <section
        id="book"
        className="regervation_part section_padding info-section bg-dark bg-right"
      >
        <div className="container py-5">
          <div className="row ">
            <div className="col-lg-8 col-md-6 col-sm-10 form-sec  mx-auto">
              <div className="regervation_part_iner">
                <form>
                  <h2 className="mb-4" style={{ color: "white" }}>
                    Book an Appointment!
                  </h2>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <select
                        id="ddlServiceTypeId"
                        name="ddlServiceTypeId"
                        className="form-control"
                      ></select>
                      <input
                        type="hidden"
                        value=""
                        id="ServiceTypeId"
                        name="ServiceTypeId"
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <select
                        className="form-control"
                        id="ddlSalonId"
                        name="ddlSalonId"
                      >
                        <option value="" selected>
                          Select Salon*
                        </option>
                        <option value="223432-12312-qazy">
                          HairTrust Xpress
                        </option>

                        <option value=""></option>
                      </select>
                      <input
                        type="hidden"
                        value=""
                        id="SalonId"
                        name="SalonId"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        className="form-control"
                        id="FirstName"
                        name="FirstName"
                        placeholder="First Name"
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <input
                        className="form-control"
                        id="LastName"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        className="form-control"
                        id="Email"
                        name="Email"
                        placeholder="Email Address"
                        type="email"
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <input
                        className="form-control"
                        id="Phone"
                        name="Phone"
                        placeholder="Enter Phone"
                        type="text"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        id="BookDate"
                        name="BookDate"
                        type="text"
                        className="form-control datepicker"
                        placeholder="Date *"
                      />
                    </div>
                    <div className="form-group time_icon col-md-6">
                      <select
                        className="form-control"
                        id="BookTime"
                        name="BookTime"
                      >
                        <option value="" selected>
                          Time *
                        </option>
                        <option value="8-10">8 AM TO 10AM</option>
                        <option value="10-12">10 AM TO 12PM</option>
                        <option value="12-2">12PM TO 2PM</option>
                        <option value="2-4">2PM TO 4PM</option>
                        <option value="4-6">4PM TO 6PM</option>
                        <option value="6-8">6PM TO 8PM</option>
                        <option value="8-10">8PM TO 10PM</option>
                        <option value="1">10PM TO 12PM</option>
                      </select>
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        className="form-control"
                        placeholder="Enter your message here!"
                        rows="4"
                      />
                    </div>
                  </div>

                  <div className="form-group col-md-12 text-center">
                    <button
                      className="btn btn-primary btn-capsul px-4 regerv_btn_iner"
                      type="submit"
                    >
                      Make an Appointment
                    </button>
                    .
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reservation;
