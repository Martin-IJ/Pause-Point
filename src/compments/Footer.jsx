import React from "react";
import logo from "../assets/images/Pause Point 3 1.svg";
import facebook from "../assets/images/logos_facebook.svg";
import whatsapp from "../assets/images/logos_whatsapp-icon.svg";
import call from "../assets/images/ph_phone-call-light.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgba(4, 151, 60, 0.40)" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 pt-2 col-md-8">
            <div className="d-flex flex-column gap-4 gap-md-2 justify-content-center align-items-center justify-content-md-start align-items-md-start">
              <div className="">
                <img src={logo} alt="" className="img-fluid" />
              </div>
              <p className="col-12 col-md-6 pb-1 text-center text-md-start">
                Lorem ipsum dolor sit amet consectetur. Consectetur eu nulla
                lorem neque cras ligula suspendisse. Sit molestie donec porta
                turpis pharetra a ut amet.
              </p>

              <div className="d-flex gap-md-3 gap-5 ">
                <Link to={""}>
                  <img src={facebook} alt="" />
                </Link>
                <Link to={""}>
                  <img src={whatsapp} alt="" />
                </Link>
                <Link to={""}>
                  <img src={call} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 pt-2 d-flex justify-content-between pt-5 pt-lg-0 flex-column flex-lg-row gap-3 gap-lg-0 justify-content-center align-items-center justify-content-md-between align-items-md-start">
            <div>
              <h4 className="fs-5 fw-semibold pt-1 pb-3">Information</h4>
              <ul>
                <Link to={""}>
                  <li className="pb-2 text-center text-md-start">F.A.Q</li>
                </Link>
                <Link to={""}>
                  <li className="pb-2 text-center text-md-start">
                    Privacy Policy
                  </li>
                </Link>
                <Link to={""}>
                  <li className="pb-2 text-center text-md-start">
                    Terms of Use
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <h4 className="fs-5 fw-semibold pt-1 pb-3">Quick Links</h4>
              <ul>
                <Link to={"/"}>
                  <li className="pb-2 text-center text-md-start">Home</li>
                </Link>
                <Link to={"/about"}>
                  <li className="pb-2 text-center text-md-start">About Us</li>
                </Link>
                <Link to={"/services"}>
                  <li className="pb-2 text-center text-md-start">Services</li>
                </Link>
                <Link to={""}>
                  <li className="pb-2 text-center text-md-start">Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
