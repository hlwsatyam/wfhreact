import React, { useEffect, useState } from "react";
import { FaExclamationCircle, FaUserShield, FaLock } from "react-icons/fa";

// Disclaimer Component
const Disclaimer = () => {
  const [color, setColor] = useState("#f0f0f0"); // initial soft background color

  // Function to handle background color animation
  useEffect(() => {
    const interval = setInterval(() => {
      const colors = ["#e0f7fa", "#f9fbe7", "#fffde7", "#f3e5f5"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Styles for the disclaimer container
  const disclaimerStyle = {
    backgroundColor: color,
    padding: "30px",
    borderRadius: "15px",
    color: "#333",
    fontSize: "18px",
    lineHeight: "1.7",
    textAlign: "center",
    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
    transition: "background-color 1s ease",
    marginBottom: "40px",
  };

  const headingStyle = {
    fontWeight: "bold",
    fontSize: "26px",
    marginBottom: "15px",
    animation: "fadeInDown 2s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const textStyle = {
    animation: "fadeInUp 2s",
    fontSize: "17px",
  };

  const iconStyle = {
    marginRight: "10px",
    color: "#ff5252",
  };

  const lockIconStyle = {
    fontSize: "50px",
    marginBottom: "20px",
    color: "#0288d1",
  };

  // Keyframes for fadeIn animation
  const fadeInAnimation = `
    @keyframes fadeInDown {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <div>
      {/* Injecting the keyframes animation styles */}
      <style>{fadeInAnimation}</style>

      <div style={disclaimerStyle}>
        {/* Lock Icon for Added Graphic Element */}
        <div style={lockIconStyle}>
          <FaLock />
        </div>

        {/* Disclaimer Heading */}
        <h2 style={headingStyle}>
          <FaExclamationCircle style={iconStyle} />
          Disclaimer
        </h2>

        {/* Disclaimer Text */}
        <p style={textStyle}>
          <FaUserShield style={iconStyle} />
          vihan enterprises aims to provide safe and legitimate work-from-home opportunities. However, it is essential
          for users to exercise caution and responsibility when engaging with offers, employers, or sharing any personal
          information. Earnings or placements are not guaranteed, and users are advised to verify each opportunity
          thoroughly.
        </p>
        <p style={textStyle}>
          <span role="img" aria-label="caution">
            ⚠️
          </span>{" "}
          Please note that Vivaan Enterprises is not liable for any losses or damages incurred from the use of this
          platform, including third-party engagements. Always use discretion and protect your sensitive information.
        </p>
        <p style={textStyle}>
          Stay alert, stay safe!{" "}
          <span role="img" aria-label="shield">
            🛡️
          </span>
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
