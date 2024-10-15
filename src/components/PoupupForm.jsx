import React, { useState } from 'react';
import './PopupForm.css'; // External CSS for styling

function PopupForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    workType: '',
    hasLaptop: '',
    hasMobile: '',
  });

  const [isOpen, setIsOpen] = useState(true); // To handle popup visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
  };

  const handleClose = () => {
    setIsOpen(false); // Close popup when close button is clicked
  };

  return (
    <>
      {isOpen && (
        <div className="popup-form-container">
          <div className="popup-form">
            <button className="close-btn" onClick={handleClose}>&times;</button>
            <h2>Join Us!</h2>
            <h2> <img className='gif-img' src="https://img.bitgetimg.com/multiLang/web/a2f6015e9fb909935b26702fb0038b9e.gif" alt="" /> </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label>Type of Work</label>
                <select
                  name="workType"
                  value={formData.workType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select work type
                  </option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                </select>
              </div>

              <div className="form-group">
                <label>Do you have a Laptop?</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="hasLaptop"
                      value="yes"
                      checked={formData.hasLaptop === 'yes'}
                      onChange={handleChange}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="hasLaptop"
                      value="no"
                      checked={formData.hasLaptop === 'no'}
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Do you have a Mobile?</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="hasMobile"
                      value="yes"
                      checked={formData.hasMobile === 'yes'}
                      onChange={handleChange}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="hasMobile"
                      value="no"
                      checked={formData.hasMobile === 'no'}
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default PopupForm;
