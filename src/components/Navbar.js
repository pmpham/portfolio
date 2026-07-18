const Navbar = ({ resume }) => (
  <header className="site-header">
    <a className="wordmark" href="#about" aria-label="Peter Pham, home">
      PP
    </a>
    <nav aria-label="Main navigation">
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
      <a href={resume} target="_blank" rel="noreferrer">Resume ↗</a>
    </nav>
  </header>
);

export default Navbar;
