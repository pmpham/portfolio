import React from "react";
import { Body2, Card } from "ui-neumorphism";
import Exp from "./data/experience.json";

const Experience = () => {
    return (
        <div>
            <h2 style={{ textAlign: "center", fontSize: 40, color: "white" }}>
                experience
            </h2>
            <div
                className="experience"
                style={{ display: "flex", justifyContent: "center" }}>
                <div
                    className="experience_cards"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        maxWidth: 1000,
                        flexWrap: "wrap",
                    }}>
                    {Exp.map((exp) => {
                        return (
                            <Card
                                dark={true}
                                width={300}
                                elevation={2}
                                style={{ margin: 10, alignSelf: "center" }}>
                                <div
                                    className="experience_card_info"
                                    style={{ padding: 10 }}>
                                    <h3>{exp.company}</h3>
                                    <Body2 style={{ color: "#89CFF0" }}>
                                        {exp.position}
                                        <br />
                                        {exp.tenure}
                                    </Body2>
                                    <p
                                        style={{
                                            whiteSpace: "pre-wrap",
                                            textAlign: "left",
                                            fontSize: "small",
                                            paddingTop: "5px",
                                        }}>
                                        {console.log(exp.responsibilities)}
                                        {exp.responsibilities.map(
                                            (responsibility) => {
                                                return responsibility + "\n";
                                            },
                                        )}
                                    </p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Experience;
