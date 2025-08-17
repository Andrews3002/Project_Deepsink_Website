import NavLinks from "./components/NavLinks";
import './App.css';

const links = ['Home', 'About Us', 'Research Topics', 'Contact Us']; 
const topics = ['Topic 1', 'Topic 2', 'Topic 3'];

function App() {
  return (
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
      <nav className="navbar">
        <NavLinks links={links} topics={topics} />
      </nav>      
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
      </div>
    </>
  );
}

export default App;