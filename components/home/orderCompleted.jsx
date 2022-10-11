import React from "react";

function OrderCompleted({ sucess }) {
  return (
    <>
      {" "}
      <section
        id="PaymentSucces"
        className="regervation_part section_padding info-section bg-dark bg-right hide"
      >
        <div className="container py-5">
          <div className="row ">
            <div className="col-lg-8 col-md-6 col-sm-10 form-sec my-5 p-5 mx-auto">
              <div className="regervation_part_iner">
                <h3 className="mb-4 " style={{ color: "white" }}>
                  Your Order was successfull
                </h3>
                <div className="form-row ">
                  <h6 className="text-white"> Thanks for your order </h6>
                  <div className="copy-content pr-4">
                    <p className="lead ml-2 text-white">
                      Order Id -{sucess.OrderId}
                      <input
                        type="hidden"
                        value={sucess.OrderId}
                        id="OrderId"
                        name="OrderId"
                      />
                    </p>
                    <p className="lead ml-2 text-white">
                      Service requested -{sucess.ServiceTypeName}
                    </p>

                    <p className="lead ml-2 text-white">
                      Salon Name -{sucess.SalonName}
                    </p>

                    <p className="ml-2 text-white">
                      Cost - {sucess.Price}
                      <input
                        type="hidden"
                        value={sucess.Price}
                        id="TotalPrice"
                        name="TotalPrice"
                      />
                    </p>
                    <p className="mt-4 ml-2">
                      Payment Method - {sucess.PaymentMethod}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderCompleted;
