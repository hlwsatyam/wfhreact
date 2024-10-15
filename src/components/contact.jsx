import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import Disclaimer from "./Disclaimer";
import { Link } from "react-router-dom"; // For routing to other pages
import "./Footer.css"; // Import the CSS file for styling

const initialState = {
  name: "",
  email: "",
  message: "",
  workType: "",
  hasLaptop: "",
  hasMobile: "",
};

export const Contact = (props) => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, message, workType, hasLaptop, hasMobile } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setFormData({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your own Service ID, Template ID, and Public Key from EmailJS
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-6">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>Start Earning Today!</p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="number"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Mobile Number"
                        required
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label style={{ color: "white" }}>Type of Work</label>
                      <select
                        name="workType"
                        className="form-control"
                        value={workType}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select Work Type
                        </option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ color: "white" }}>
                        Do you have a Laptop?
                      </label>
                      <div className="radio-group">
                        <label style={{ color: "white" }}>
                          <input
                            type="radio"
                            name="hasLaptop"
                            value="yes"
                            checked={hasLaptop === "yes"}
                            onChange={handleChange}
                          />{" "}
                          Yes
                        </label>
                        <label style={{ color: "white" }}>
                          <input
                            type="radio"
                            name="hasLaptop"
                            value="no"
                            checked={hasLaptop === "no"}
                            onChange={handleChange}
                          />{" "}
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ color: "white" }}>
                        Do you have a Mobile?
                      </label>
                      <div className="radio-group">
                        <label style={{ color: "white" }}>
                          <input
                            type="radio"
                            name="hasMobile"
                            value="yes"
                            checked={hasMobile === "yes"}
                            onChange={handleChange}
                          />{" "}
                          Yes
                        </label>
                        <label style={{ color: "white" }}>
                          <input
                            type="radio"
                            name="hasMobile"
                            value="no"
                            checked={hasMobile === "no"}
                            onChange={handleChange}
                          />{" "}
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Google Map iframe */}
          <div
            className="col-md-6  "
            style={{ position: "relative", overflow: "hidden" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6876715737966!2d144.9559276153216!3d-37.81720997975139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43c0f4a6fb%3A0x2f0f87a17763d0e!2s4321%20California%20St%2C%20San%20Francisco%2C%20CA%2094158%2C%20USA!5e0!3m2!1sen!2s!4v1634799999999!5m2!1sen!2s"
              width="100%"
              height="77%"
              frameBorder="0"
              style={{
                border: 0,
                marginTop: "20px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
              }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>

          {/* Social media icons (commented out in case you want to use them later) */}
           
        </div>
      </div>
      <Disclaimer />
      <footer className="vivaan-footer">
      <div className="vivaan-footer-container">
        {/* Social Media Section */}
        <div className="vivaan-footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>

        {/* Links Section */}
        <div className="vivaan-footer-links">
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/terms" className="footer-link">
            Terms of Service
          </Link>
         
        </div>

        {/* Contact Info Section */}
        <div className="vivaan-footer-contact">
          <p>
            <i className="fa fa-envelope"></i> Email: info@vivaanenterprises.com
          </p>
          <p>
            <i className="fa fa-phone"></i> Phone: +91 720 9058182
          </p>
          <p>
            <i className="fa fa-map-marker"></i>302, 3rd Floor, NDM2,
Netaji Subhash Place, Pitam Pura,
New Delhi-110034
          </p>
        </div>

        {/* Copyright Section */}
        <p className="vivaan-footer-copyright">
          &copy; 2024 vihan enterprises
          . All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  );
};
