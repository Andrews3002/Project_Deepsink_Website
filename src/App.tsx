import NavLinks from "./components/NavLinks";

const links = ['Home', 'About', 'Topic1', 'Topic2', 'Topic3', 'Topic4']; 

function App() {
  return (
    <body>
      <nav className="navbar">
        <NavLinks links={links} />
      </nav>
      
    </body>
  );
}

export default App;
