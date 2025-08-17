import NavLinks from "./components/NavLinks";

const links = ['Home', 'About Us', 'Research Topics', 'Contact Us']; 
const topics = ['Topic 1', 'Topic 2', 'Topic 3'];

function App() {
  return (
    <>
      <nav className="navbar">
        <NavLinks links={links} topics={topics} />
      </nav>
      <div className="liveParticleBackground">
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
            
          <p>Welcome to our website, below you will find information on our preposition. Each topic below should give you insight into why you should invest in our initiative</p>
        </div>
      </div>
    </>
  );
}

export default App;
