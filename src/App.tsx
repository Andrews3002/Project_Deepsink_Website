import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavLinks from "./components/NavLinks";
import ResearchTopics from "./components/ResearchTopics";
import ResearchDetail from "./components/ResearchDetail";

const links = ['Home', 'About Us', 'Research Topics', 'Mission', 'Contact Us'];

const researchTopics = [
  { id: 1, title: "Carbon Capture", summary: "Techniques for capturing CO₂ 7777777777777777777777777777777.", imageUrl: "/images/carbon_capture.jpg", detailLink: "/research/1" },
  { id: 2, title: "Deep Sink Storage", summary: "Long-term storage strategies.", imageUrl: "/images/deep_sink.jpg", detailLink: "/research/2" },
  { id: 3, title: "Monitoring Systems", summary: "Sensors and AI to track stored carbon safely.", imageUrl: "/images/monitoring.jpg", detailLink: "/research/3" },
  { id: 4, title: "Monitoring Systems", summary: "Sensors and AI to track stored carbon safely.", imageUrl: "/images/monitoring.jpg", detailLink: "/research/4" },
  { id: 5, title: "Monitoring Systems", summary: "Sensors and AI to track stored carbon safely.", imageUrl: "/images/monitoring.jpg", detailLink: "/research/5" },
  { id: 6, title: "Monitoring Systems", summary: "Sensors and AI to track stored carbon safely.", imageUrl: "/images/monitoring.jpg", detailLink: "/research/6" },
  { id: 7, title: "Monitoring Systems", summary: "Sensors and AI to track stored carbon safely.", imageUrl: "/images/monitoring.jpg", detailLink: "/research/7" },
  { id: 8, title: "Monitoring Systems", summary: "Sensors and AI to track stored carbon safely.", imageUrl: "/images/monitoring.jpg", detailLink: "/research/8" },
];

function App() {
  const researchRef = useRef<HTMLDivElement>(null);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar when it past the   home section
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight - 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      {showNav && (
        <nav className="navbar">
          <NavLinks links={links} />
        </nav>
      )}

      <Routes>
        {/* Home Section */}
        <Route
          path="/"
          element={
            <>
              <div className="liveParticleBackground">
                <div id="gradientSource"></div>
                <div id="homeSection">
                  <h1>Project Deepsink</h1>
                  <p>Welcome to our website. Scroll down to learn more about our initiative.</p>
                  <div
                    className="scrollArrow"
                    onClick={() => researchRef.current?.scrollIntoView({ behavior: "smooth" })}
                  >
                    &#x2193;
                  </div>
                </div>
              </div>
              <div ref={researchRef} id="researchsection">
                <ResearchTopics topics={researchTopics} />
              </div>
            </>
          }
        />

        {/* Research Detail Section */}
        <Route path="/research/:id" element={<ResearchDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
