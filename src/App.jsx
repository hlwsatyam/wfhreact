import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import PopupForm from "./components/PoupupForm";
import Disclaimer from "./components/Disclaimer";
import Privacy from "./components/policy/privacy";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import PlansComparison from "./components/PlansComparison";
import Keywords from "./components/Keywords";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          {/* Route for the home page */}
          <Route
            path="/"
            element={
              <>
                <PopupForm isOpen={isOpen}
                 setIsOpen={setIsOpen} />
                <Navigation />
                <Header isOpen={isOpen}
                 setIsOpen={setIsOpen} data={landingPageData.Header} />
                <Features data={landingPageData.Features} />
                <About data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <PlansComparison />
                <Gallery data={landingPageData.Gallery} />
                <Testimonials data={landingPageData.Testimonials} />

                <Contact data={landingPageData.Contact} />
                <Keywords/>
              </>
            }
          />

          {/* Route for the privacy policy page */}
          <Route path="/privacy" element={<Privacy />} />

          {/* You can add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
