import React from "react";
import Proj from "./data/projects.json";
import { Body2, Button, Card } from "ui-neumorphism";
import { Link } from "react-scroll";

const Projects = () => {
  return (
    <div style={{ height: "100%", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", fontSize: 40, color: "white" }}>
        projects
      </h2>
      <div
        className="projects"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="project_cards" style={{display:"flex", justifyContent:"center", maxWidth:960, flexWrap:"wrap"}}>
          {Proj.map((proj) => {
            {
              return (
                <Card dark={true} maxWidth={300} elevation={3} style={{margin:10, alignSelf:"center"}}>
                  <div className="project_card_info" style={{ padding: 10 }}>
                    <h2>{proj.project}</h2>
                    <Body2 style={{ color: "#89CFF0" }}>{proj.stack}</Body2>
                    <p
                      style={{
                        whiteSpace: "pre-wrap",
                        textAlign: "left",
                        fontSize: "small",
                        paddingTop: "5px",
                      }}
                    >
                      {proj.desc}
                    </p>
                    {proj.repo && (
                      <Link onClick={() => window.open(proj.repo)}>
                        <Button
                          dark={true}
                          rounded={true}
                          style={{ marginTop: 10 }}
                        >
                          Link
                        </Button>
                      </Link>
                    )}
                    {!proj.repo && (
                        <Button
                          dark={true}
                          rounded={true}
                          disabled={true}
                          style={{ marginTop: 10 }}
                        >
                          Private
                        </Button>
                    )}
                  </div>
                </Card>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
