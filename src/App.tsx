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
          <h1>Welcome to Our Website</h1>
          <p>Welcome to our website, below you will find information on our preposition. Each topic below should give you insight into why you should invest in our initiative</p>
        </div>
      </div>
    </>
  );
}

export default App;
