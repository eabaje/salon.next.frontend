import React from "react";
import FooterUpper from "./footer-upper";
function Footer() {
  return (
    <>
      <div className="copy-footer bg-primary py-2">
        <div className="container text-center text-light">
          &copy;{" "}
          <a href="#" target="_blank" rel="noreferrer">
            BarberSeek
          </a>{" "}
          <span id="year"></span>. All rights reserved. Created with{" "}
          <i className="fa fa-heart"></i>
        </div>
      </div>
    </>
  );
}

export default Footer;
