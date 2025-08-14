import NavLinks from "./components/NavLinks";

const links = ['Home', 'About', 'Topic1', 'Topic2', 'Topic3', 'Topic4']; 

function App() {
  return (
    <>
      <nav className="navbar">
        <NavLinks links={links} />
      </nav>
      <div className="liveParticleBackground">
        <div id="homeSection">
          <h1>Project Deepsink</h1>
          <p>Welcome to our website, below you will find information on our preposition. Each topic below should give you insight into why you should invest in our initiative</p>
        </div>
      </div>
    </>
  );
}

export default App;
