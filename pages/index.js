import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import ReserverOrder from "../components/home/order";
import OrderCompleted from "../components/home/orderCompleted";
import Reservation from "../components/home/reservation";
import MainLayout from "../layout/mainLayout";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

function Home() {
  const [reserveSpotStep, setReserveSpotStep] = useState(0);
  const [order, setOrder] = useState("");
  const [orderComplete, setOrderComplete] = useState("");

  return (
    <>
      <MainLayout>
        <section id="home" className="intro intro-bg bg-overlay parallax">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 caption-two-panel ml-auto pt-5">
                <div className="intro-caption mt-5">
                  <h1 className="text-white mb-2">
                    It's not really hard to be smartt
                  </h1>
                  <p className="text-white mb-4">
                    {" "}
                    Thinking about changing up your look and trying a new
                    haircut style? Look no further. We got you covered.
                  </p>
                  <a
                    href="#"
                    id="lnkBook"
                    className="btn btn-primary text-white mr-3"
                  >
                    Find a Barber Near You
                  </a>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="info-section text-white bg-right bg-dark"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="head-box">
                  <h2 className="font-abril ">Services We offered!</h2>
                </div>
                <div className="three-panel-block mt-5">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="service-block mb-5">
                        <i className="icon-box mb-3 float-left w-100">
                          <img
                            src="assets/img/icons/scissors.png"
                            className="img-fluid"
                          />
                        </i>
                        <h3 className="text-primary">Scissor Cut</h3>
                        <p>
                          Never in all their history have men been able truly to
                          conceive of the world as one a single sphere
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="service-block mb-5">
                        <i className="icon-box mb-3 float-left w-100">
                          <img
                            src="assets/img/icons/razor-1.png"
                            className="img-fluid"
                          />
                        </i>
                        <h3 className="text-primary">Razor Cut</h3>
                        <p>
                          Never in all their history have men been able truly to
                          conceive of the world as one a single sphere
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="service-block mb-5">
                        <i className="icon-box mb-3 float-left w-100">
                          <img
                            src="assets/img/icons/brush.png"
                            className="img-fluid"
                          />
                        </i>
                        <h3 className="text-primary">Head Shave</h3>
                        <p>
                          Never in all their history have men been able truly to
                          conceive of the world as one a single sphere
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="service-block">
                        <i className="icon-box mb-3 float-left w-100">
                          <img
                            src="assets/img/icons/hair-clip.png"
                            className="img-fluid"
                          />
                        </i>
                        <h3 className="text-primary">Clipper Cut</h3>
                        <p>
                          Never in all their history have men been able truly to
                          conceive of the world as one a single sphere
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="copy-content-sec sec-bg-02 h-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 copy-container ml-auto">
                <div className="copy-content pr-4">
                  <h2 className="font-abril text-primary">Who We Are</h2>
                  <p className="lead ml-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p className="ml-2">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </p>
                  <p className="mt-4 ml-2">
                    <a href="#" className="text-primary">
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="price" className="info-section sec-bg-03 bg-overlay">
          <div className="container text-white">
            <div className="head-box text-center mb-5">
              <h2 className="font-abril">Our Jaw Drop Prices</h2>
            </div>
            <div className="three-panel-block my-4">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 pl-md-5 mb-4">
                  <div className="service-block-bg text-center p-3">
                    <div className="price-count font-abril">
                      <span>$</span>39
                    </div>
                    <h3>Haircut</h3>
                    <p className="px-4">
                      Never in all their history have men been able truly to
                      conceive of the world as one a single sphere
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 pr-md-5 mb-4">
                  <div className="service-block-bg text-center p-3">
                    <div className="price-count font-abril">
                      <span>$</span>27
                    </div>
                    <h3>Shave</h3>
                    <p className="px-4">
                      Never in all their history have men been able truly to
                      conceive of the world as one a single sphere
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 pl-md-5 mb-4">
                  <div className="service-block-bg text-center p-3">
                    <div className="price-count font-abril">
                      <span>$</span>20
                    </div>
                    <h3>Moustache </h3>
                    <p className="px-4">
                      Never in all their history have men been able truly to
                      conceive of the world as one a single sphere
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 pr-md-5">
                  <div className="service-block-bg text-center p-3">
                    <div className="price-count font-abril">
                      <span>$</span>15
                    </div>
                    <h3>Beard Trim</h3>
                    <p className="px-4">
                      Never in all their history have men been able truly to
                      conceive of the world as one a single sphere
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {reserveSpotStep === 0 ? (
          <Reservation />
        ) : reserveSpotStep === 1 ? (
          <ReserverOrder order={order} />
        ) : (
          <OrderCompleted success={orderComplete} />
        )}

        <section
          id="testimonial"
          className="testimonial-section sec-bg-04 py-5 h-100"
        >
          <div className="container">
            <div className="row">
              <div className="head-box text-center mb-3 col-md-12 mt-5">
                <h2 className="font-abril">What Our Clients Says About Us</h2>
              </div>
            </div>
            <div className="single-testimonial">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner pt-5" role="listbox">
                  <div className="carousel-item active">
                    <div className="testimonial-box text-center">
                      <div className="testimonial-content w-100 bg-faded">
                        <p className="mb-0">
                          <i
                            className="fa fa-quote-left fa-3x"
                            aria-hidden="true"
                          ></i>
                        </p>
                        <p className="lead font-abril">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <div className="testimonial-footer">
                          <h4 className="mt-2 mb-0 text-primary">
                            Gerald Montgomery
                          </h4>
                          <p>-United States</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonial-box text-center">
                      <div className="testimonial-content w-100 bg-faded">
                        <p className="mb-0">
                          <i
                            className="fa fa-quote-left fa-3x"
                            aria-hidden="true"
                          ></i>
                        </p>
                        <p className="lead font-abril">
                          "Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum. Lorem ipsum dolor sit amet.
                        </p>
                        <div className="testimonial-footer">
                          <h4 className="mt-2 mb-0 text-primary">
                            Harper Robertson
                          </h4>
                          <p>-United States</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navigator-box">
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="fa fa-angle-left"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="fa fa-angle-right"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section h-100 bg-dark">
          <div id="map" className="bg-overlay"></div>
          <div className="container py-5">
            <div className="col-lg-8 col-md-6 col-sm-10 form-sec bg-white my-5 p-5 mx-auto">
              <form>
                <h2 className="mb-4">Contact Us!</h2>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        className="sr-only"
                        htmlhtmlFor="formGroupExampleInput"
                      >
                        Full Name
                      </label>
                      <input
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Full Name"
                        onFocus="this.placeholder=''"
                        onBlur="this.placeholder='Full Name'"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        className="sr-only"
                        htmlhtmlFor="formGroupExampleInput2"
                      >
                        Phone Number
                      </label>
                      <input
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Phone Number"
                        onFocus="this.placeholder=''"
                        onBlur="this.placeholder='Phone Number'"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        className="sr-only"
                        htmlhtmlFor="formGroupExampleInput2"
                      >
                        Email Address
                      </label>
                      <input
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Email Address"
                        onFocus="this.placeholder=''"
                        onBlur="this.placeholder='Email Address'"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        className="sr-only"
                        htmlhtmlFor="formGroupExampleInput2"
                      >
                        Address
                      </label>
                      <input
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Enter Address"
                        onFocus="this.placeholder=''"
                        onBlur="this.placeholder='Enter Address'"
                        type="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label
                        className="sr-only"
                        htmlhtmlFor="formGroupExampleInput2"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        placeholder="Enter your message here!"
                        rows="4"
                        onFocus="this.placeholder=''"
                        onBlur="this.placeholder='Enter your message here!'"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-capsul px-4">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
//export default Home;
export default dynamic(() => Promise.resolve(Home), { ssr: false });
