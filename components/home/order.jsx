import React from "react";

function ReserverOrder({ order }) {
  return (
    <>
      {" "}
      <section
        id="Order"
        className="regervation_part section_padding info-section bg-dark bg-right hide"
      >
        <div className="container py-5">
          <div className="row ">
            <div className="col-lg-8 col-md-6 col-sm-10 form-sec my-5 p-5 mx-auto">
              <div className="regervation_part_iner">
                <form>
                  <h3 className="mb-4 " style={{ color: "white" }}>
                    Complete your Appointment
                  </h3>
                  <div className="form-row ">
                    <h6 className="text-white"> Thanks for your order </h6>
                    <div className="copy-content pr-4">
                      <p className="lead ml-2 text-white">
                        Order Id -{order.OrderId}
                        <input
                          type="hidden"
                          value=""
                          id="OrderId"
                          name="OrderId"
                        />
                      </p>
                      <p className="lead ml-2 text-white">
                        Service requested - {order.ServiceType}
                        <input
                          type="hidden"
                          value=" "
                          id="ServiceTypeId"
                          name="ServiceTypeId"
                        />
                      </p>
                      <p className="ml-2 text-white">
                        Cost - {order.OrderCost}
                        <input
                          type="hidden"
                          value=" "
                          id="TotalPrice"
                          name="TotalPrice"
                        />
                      </p>
                      <p className="mt-4 ml-2"></p>
                    </div>

                    <div className="form-group col-md-6 text-white">
                      <select
                        id="ddlPaymentMethod"
                        name="ddPaymentMethod"
                        className="form-control"
                      >
                        <option value="0" selected>
                          Payment Type*
                        </option>

                        <option value="paymethod">paymethod</option>
                      </select>

                      <input
                        type="hidden"
                        value=" "
                        id="PaymentMethod"
                        name="PaymentMethod"
                      />
                    </div>
                  </div>
                  <input
                    type="hidden"
                    value=" @BookModel.Email"
                    id="Email"
                    name="Email"
                  />

                  <div className="form-group col-md-12 ">
                    <button
                      className="btn btn-primary btn-capsul px-4 regerv_btn_iner"
                      type="submit"
                    >
                      Complete your order
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

export default ReserverOrder;
