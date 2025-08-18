import { useRef} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavLinks from "./components/NavLinks";
import ResearchTopics from "./components/ResearchTopics";
import ResearchDetail from "./components/ResearchDetail";
import Mission from "./components/Mission";
import Contactus from "./components/ContactUs";

import './App.css';

const links = [
  { name: "Home", path: "/" },
  { name: "Research Topics", path: "/research-topics" },
  { name: "Mission", path: "/mission" },
  { name: "Contact Us", path: "/contact-us" },
];

const researchTopics = [
  { id: 1, title: "CO2 EOR & EGR", summary: "Techniques for capturing CO2", imageUrl: "/images/carbon_capture.jpg", detailLink: "/research/1", detail: "Detailed information about Carbon Capture." },
  { id: 2, title: "Using AI + Sensors", summary: "Long-term storage strategies.", imageUrl: "/images/deep_sink.jpg", detailLink: "/research/2", detail: "Detailed information about Deep Sink Storage."  },
  { id: 3, title: "Carbon Capture emissions in waterways", summary: "Sensors and AI to track stored carbon safely.", imageUrl: "/images/monitoring.jpg", detailLink: "/research/3", detail: "Detailed information about Monitoring Systems." },
  { id: 4, title: "Leakages of CO2", summary: "Sensors and AI to track stored carbon safely.", imageUrl: "/images/monitoring.jpg", detailLink: "/research/4", detail: "Detailed information about Monitoring Systems." },
  { id: 5, title: "Treatment of CO2 ", summary: "Sensors and AI to track stored carbon safely.", imageUrl: "/images/monitoring.jpg", detailLink: "/research/5", detail: "Detailed information about Monitoring Systems." },
  { id: 6, title: "Legal Information", summary: "Sensors and AI to track stored carbon safely.", imageUrl: "/images/monitoring.jpg", detailLink: "/research/6", detail: "Detailed information about Monitoring Systems." },
  { id: 7, title: "Contingency Plan", summary: "Sensors and AI to track stored carbon safely.", imageUrl: "/images/monitoring.jpg", detailLink: "/research/7", detail: "Detailed information about Monitoring Systems." },
];


function App() {
  const researchRef = useRef<HTMLDivElement> (null);

  return (
    <Router>
      <nav className="navbar">
        <NavLinks links={links} topics={researchTopics} />
      </nav>
      

      <Routes>
        {/* Home Section */}
        <Route
          path="/"
          element={
            <>
              <div className = "particleContainer">
                <div className = "particle" style={{ ["--i" as any]: 27 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 10 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 34 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 26 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 23 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 14 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 32 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 26 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 29 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 36 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 21 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 12 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 34 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 32 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
              </div>
              <div id="homeSection">
                <div className="homeTitleDiv">
                  <div className="homeTitleLine">
                    <h1 className="accentText">Deep</h1>
                    <h1>Below</h1>
                  </div>
                  <div className="homeTitleLine">
                    <h1>We Breathe</h1>
                    <h1 className="accentText">Free</h1>
                  </div>
                </div>
                <p>
                  Welcome to our website, below you will find information on our
                  proposition. Each topic below should give you insight into why you
                  should invest in our initiative
                </p>
                <div className="scrollArrow" onClick={() => researchRef.current?.scrollIntoView({ behavior: "smooth" })}>
                  &#x2193;
                </div>
              </div>
              <div ref={researchRef} id="researchsection">
                <ResearchTopics topics={researchTopics} />
              </div>
            </>
          }
        />

        {/* Research Detail Section */}
        <Route path="/research/:id" element={<ResearchDetail researchTopics={researchTopics}/>} />

        {/* Mission Page */}
        <Route path="/mission" element={<Mission />} />

        {/* Contact Us Page */}
        <Route path="/contact-us" element={<Contactus />} />
      </Routes>
    </Router>
  )
}

export default App;