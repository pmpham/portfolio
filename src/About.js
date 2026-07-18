const About = ({ resume }) => {
  return (
    <div className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Software Development Engineer II · AWS</p>
        <h1>Peter Pham</h1>
        <p className="hero-intro">Software engineer at AWS Data Center Systems, building cloud infrastructure and computer-vision systems for data-center operations.</p>
        <div className="hero-actions">
          <a className="button button-primary" href={resume} target="_blank" rel="noreferrer">View resume</a>
          <a className="button" href="#contact">Contact</a>
        </div>
        <div className="social-links" aria-label="Social links">
          <a href="https://github.com/pmpham" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/peterminhpham/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </div>
  );
};

export default About;
