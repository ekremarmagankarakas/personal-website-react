import React, { useState } from "react";
import Project from "./Project.jsx";

const allProjects = [
  {
    id: "myModal1",
    imgSrc: "img/soccer.jpg",
    title: "UK Soccer Player Valuation Analysis",
    description: "The project involved creating a statistical model to estimate UK soccer players' transfer values...",
    modalContent: <div><h1>UK Soccer Player Valuation Analysis</h1>{/* Rest of the modal content */}</div>,
    isEven: false,
    group: "python"
  },
  {
    id: "myModal6",
    imgSrc: "img/diabetes.png",
    title: "Diabetes Prediction Model",
    description: "This project involves analyzing a diabetes dataset to predict the presence of diabetes...",
    modalContent: <div><h1>Diabetes Prediction Model</h1>{/* Rest of the modal content */}</div>,
    isEven: true,
    group: "python"
  },
  {
    id: "myModal7",
    imgSrc: "img/taxiTip.png",
    title: "Green Taxi Trip Analysis with Random Forest Model",
    description: "This project involves analyzing a dataset of green taxi trips in New York City...",
    modalContent: <div><h1>Green Taxi Trip Analysis with Random Forest Model</h1>{/* Rest of the modal content */}</div>,
    isEven: false,
    group: "python"
  },
  {
    id: "myModal9",
    imgSrc: "img/meatConsumption.png",
    title: "Meat Consumption Analysis and Prediction",
    description: "This project involves analyzing historical meat consumption data for different countries...",
    modalContent: <div><h1>Meat Consumption Analysis and Prediction</h1>{/* Rest of the modal content */}</div>,
    isEven: true,
    group: "python"
  },
  {
    id: "myModal10",
    imgSrc: "img/RR.png",
    title: "Screen Refresh Rate Switcher",
    description: "This project involves creating a system tray application for Windows that allows users to switch the screen refresh rate...",
    modalContent: <div><h1>Screen Refresh Rate Switcher</h1>{/* Rest of the modal content */}</div>,
    isEven: false,
    group: "python"
  },
  {
    id: "myModal11",
    imgSrc: "img/spaceship.png",
    title: "PVP Shooter Game",
    description: "This project is a Player vs. Player (PVP) shooter game developed using Python and the Pygame library...",
    modalContent: <div><h1>PVP Shooter Game</h1>{/* Rest of the modal content */}</div>,
    isEven: true,
    group: "python"
  },
  {
    id: "myModal2",
    imgSrc: "img/reversi.png",
    title: "Reversi Game Development",
    description: "The project involved developing a Reversi game using Java...",
    modalContent: <div><h1>Reversi Game</h1>{/* Rest of the modal content */}</div>,
    isEven: false,
    group: "java"
  },
  {
    id: "myModal3",
    imgSrc: "img/karakaslargroup.png",
    title: "Karakaslar Group Application",
    description: "The founder of 'Karakaşlar Group' requested an application...",
    modalContent: <div><h1>Karakaslar Group App</h1>{/* Rest of the modal content */}</div>,
    isEven: true,
    group: "java"
  },
  {
    id: "myModal8",
    imgSrc: "img/Klondike.png",
    title: "Klondike Solitaire Game Implementation",
    description: "This project involves creating a console-based version of the popular Klondike solitaire game...",
    modalContent: <div><h1>Klondike Solitaire Game Implementation</h1>{/* Rest of the modal content */}</div>,
    isEven: false,
    group: "java"
  },
  {
    id: "myModal4",
    imgSrc: "img/secimodasi.png",
    title: "The Safe Election Room Project",
    description: "The project introduced an innovative voting system...",
    modalContent: <div><h1>Election Room Project</h1>{/* Rest of the modal content */}</div>,
    isEven: true,
    group: "robotics"
  },
  {
    id: "myModal5",
    imgSrc: "img/geleceksizin.png",
    title: "The Future is Yours Book Project",
    description: "My sister and I, as juniors in high school, launched a heartfelt initiative...",
    modalContent: <div><h1>The Future is Yours</h1>{/* Rest of the modal content */}</div>,
    isEven: false,
    group: "other"
  }
];

function Projects() {
  const [visibleGroup, setVisibleGroup] = useState(null);

  const toggleGroupVisibility = (group) => {
    setVisibleGroup(visibleGroup === group ? null : group);
  };

  const filteredProjects = visibleGroup === null ? [] : allProjects.filter(project => project.group === visibleGroup || visibleGroup === "all");

  return (
    <section className="projects" id="projects">
      <div className="projects-intro">
        <h2 className="heading">
          My <span>Projects</span>
        </h2>
      </div>
      <div className="project-group-buttons">
        <button onClick={() => toggleGroupVisibility("all")} id="all-projects">All Projects</button>
        <button onClick={() => toggleGroupVisibility("robotics")} id="robotics-projects">Robotics Projects</button>
        <button onClick={() => toggleGroupVisibility("python")} id="python-projects">Python Projects</button>
        <button onClick={() => toggleGroupVisibility("java")} id="java-projects">Java Projects</button>
        <button onClick={() => toggleGroupVisibility("other")} id="other-projects">Other Projects</button>
      </div>
      <div className="projects-container">
        <div className={`project-group ${visibleGroup ? visibleGroup : ""} ${visibleGroup ? "open" : ""}`}>
          {filteredProjects.map((project, index) => (
            <Project
              key={project.id}
              id={project.id}
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
              modalContent={project.modalContent}
              isEven={project.isEven}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
