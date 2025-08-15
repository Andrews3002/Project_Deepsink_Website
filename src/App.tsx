import React, { useRef, useState, useEffect } from "react";
import NavLinks from "./components/NavLinks";
import ResearchTopics from "./components/ResearchTopics";

const links = ['Home', 'About Us', 'Research Topics', 'Contact Us'];

const researchTopics = [
  { id: 1, title: "Carbon Capture", summary: "Techniques for capturing CO₂.", imageUrl: "/images/carbon_capture.jpg", detailLink: "/research/carbon-capture" },
  { id: 2, title: "Deep Sink Storage", summary: "Long-term storage strategies.", imageUrl: "/images/deep_sink.jpg", detailLink: "/research/deep-sink-storage" },
  { id: 3, title: "Monitoring Systems", summary: "Sensors and AI to track stored carbon safely.", imageUrl: "/images/monitoring.jpg", detailLink: "/research/monitoring-systems" },
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
    <>
      {showNav && (
        <nav className="navbar">
          <NavLinks links={links} />
        </nav>
      )}

      {/* Home Section  8)*/}
      <div className="liveParticleBackground">
        <div id = "gradientSource">

        </div>
        <div id="homeSection">
          <h1>Project Deepsink</h1>
          <p>Welcome to our website. Scroll down to learn more about our initiative.</p>

          {/* Scroll Down Arrow =)*/}
          <div
            className="scrollArrow"
            onClick={() => researchRef.current?.scrollIntoView({ behavior: "smooth" })}
          >
            &#x2193;
          </div>
        </div>
      </div>

      {/* Research Topics Section :)*/}
      <div ref={researchRef} id="researchsection">
        <ResearchTopics topics={researchTopics} />
      </div>
    </>
  );
}

export default App;
