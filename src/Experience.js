import Exp from "./data/experience.json";

const Experience = () => (
  <div className="content-block">
    <div className="section-heading">
      <p className="eyebrow">01</p>
      <h2>Experience</h2>
    </div>
    <div className="experience-list">
      {Exp.map((exp) => (
        <article className="experience-item" key={`${exp.company}-${exp.organization || ""}`}>
          <div className="experience-company">
            <h3>{exp.company}</h3>
            {exp.organization && <p>{exp.organization}</p>}
          </div>
          <div className="experience-details">
            {exp.roles.map((role) => (
              <div className="role-row" key={role.title}>
                <p className="role">{role.title}</p>
                <p className="experience-date">{role.tenure}</p>
              </div>
            ))}
            <p className="experience-description">{exp.description}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Experience;
