import "./App.css";
import Navbar from "./components/Navbar";
import About from "./About";
import Experience from "./Experience";
import resume from "./data/PeterPhamResumePublic.pdf";

function App() {
  return (
    <div className="site-shell">
      <Navbar resume={resume} />
      <main>
        <section id="about" className="section hero-section">
          <About resume={resume} />
        </section>
        <section id="experience" className="section">
          <Experience />
        </section>
      </main>
      <footer className="footer" id="contact">
        <p className="eyebrow">Contact</p>
        <p className="contact-email">peterphambusiness [at] gmail [dot] com</p>
        <span>© {new Date().getFullYear()} Peter Pham</span>
      </footer>
    </div>
  );
}

export default App;
