import React, { useState } from "react";
import Project from "./Project.jsx";

const allProjects = [
  {
    id: "myModal1",
    imgSrc: "img/soccer.jpg",
    title: "UK Soccer Player Valuation Analysis",
    description: "The project involved creating a statistical model to estimate UK soccer players' transfer values, offering an impartial assessment tool for the transfer market. It analyzed players' performance metrics and other factors to identify cost-effective and strategic profiles for soccer team management. The primary aim was to link players' on-pitch performance with their market value, enhancing resource allocation decisions in club management.",
    modalContent: <div><h1>UK Soccer Player Valuation Analysis</h1>{/* Rest of the modal content */}</div>,
    isEven: false,
    group: "python"
  },
  {
    id: "myModal6",
    imgSrc: "img/diabetes.png",
    title: "Diabetes Prediction Model",
    description: "This project involves analyzing a diabetes dataset to predict the presence of diabetes in patients using various statistical and machine learning techniques. The dataset contains information on pregnancies, glucose levels, blood pressure, skin thickness, insulin levels, BMI, diabetes pedigree function, age, and the outcome (presence or absence of diabetes). Despite achieving a reasonable level of accuracy, the model's limitations underscore the need for more sophisticated techniques or additional data to improve performance in a real-world medical setting.",
    modalContent: <div><h1>Diabetes Prediction Model</h1>{/* Rest of the modal content */}</div>,
    isEven: true,
    group: "python"
  },
  {
    id: "myModal7",
    imgSrc: "img/taxiTip.png",
    title: "Green Taxi Trip Analysis with Random Forest Model",
    description: "This project involves analyzing a dataset of green taxi trips in New York City, focusing on predicting the tip amount using a variety of features such as vendor ID, pickup and drop-off locations, trip distance, fare amount, and other related attributes. The dataset is sourced from the NYC Taxi & Limousine Commission and is provided in a Parquet format. The Random Forest model shows moderate success, with potential for further improvement through additional tuning or feature engineering.",
    modalContent: <div><h1>Green Taxi Trip Analysis with Random Forest Model</h1>{/* Rest of the modal content */}</div>,
    isEven: false,
    group: "python"
  },
  {
    id: "myModal9",
    imgSrc: "img/meatConsumption.png",
    title: "Meat Consumption Analysis and Prediction",
    description: "This project involves analyzing historical meat consumption data for different countries and making predictions for future consumption using linear regression. The data is sourced from the OECD, focusing on various types of meat consumption across different years and regions.",
    modalContent: <div><h1>Meat Consumption Analysis and Prediction</h1>{/* Rest of the modal content */}</div>,
    isEven: true,
    group: "python"
  },
  {
    id: "myModal10",
    imgSrc: "img/RR.png",
    title: "Screen Refresh Rate Switcher",
    description: "This project involves creating a system tray application for Windows that allows users to switch the screen refresh rate between predefined values (360Hz and 60Hz) quickly and conveniently. The application is built using Python with the pystray, pywintypes, and win32api libraries, along with the PIL library for handling the tray icon.",
    modalContent: <div><h1>Screen Refresh Rate Switcher</h1>{/* Rest of the modal content */}</div>,
    isEven: false,
    group: "python"
  },
  {
    id: "myModal11",
    imgSrc: "img/spaceship.png",
    title: "PVP Shooter Game",
    description: "This project is a Player vs. Player (PVP) shooter game developed using Python and the Pygame library. The game allows two players to control their respective ships, shoot bullets, and compete against each other. The goal is to deplete the opponent's shield by hitting them with bullets until one player's shield reaches zero.",
    modalContent: <div><h1>PVP Shooter Game</h1>{/* Rest of the modal content */}</div>,
    isEven: true,
    group: "python"
  },
  {
    id: "myModal2",
    imgSrc: "img/reversi.png",
    title: "Reversi Game Development",
    description: "The project involved developing a Reversi game using Java, featuring a hexagonal grid, adaptable to various sizes and adhering to the standard rules for two players. It was built on a model-view-controller architecture, with the model handling the game's state, rules, and interactions, while the view provided textual output, designed with potential for future graphical upgrades. This endeavor showcases advanced Java application in algorithm creation, game development, AI strategies, and comprehensive unit testing.",
    modalContent: <div><h1>Reversi Game</h1>{/* Rest of the modal content */}</div>,
    isEven: false,
    group: "java"
  },
  {
    id: "myModal3",
    imgSrc: "img/karakaslargroup.png",
    title: "Karakaslar Group Application",
    description: "The founder of 'Karakaşlar Group' requested an application to streamline the approval of worker requests, leading to the creation of a system with three types of accounts: manager, employee, and accountant. Employees can submit entries for necessary items, which managers can approve or decline, while accountants monitor all entries without approval rights. The application features secure login, personalized entry visibility, categorization, and historical data analysis.",
    modalContent: <div><h1>Karakaslar Group App</h1>{/* Rest of the modal content */}</div>,
    isEven: true,
    group: "java"
  },
  {
    id: "myModal8",
    imgSrc: "img/Klondike.png",
    title: "Klondike Solitaire Game Implementation",
    description: "This project involves creating a console-based version of the popular Klondike solitaire game, allowing users to play different variants of the game. The main components of the project include a controller for managing user input and game flow, models representing the game logic and states, and a flexible setup for launching the game with various configurations. By leveraging OOP, the Factory pattern, MVC architecture, and robust exception handling, the project ensures a maintainable and scalable codebase.",
    modalContent: <div><h1>Klondike Solitaire Game Implementation</h1>{/* Rest of the modal content */}</div>,
    isEven: false,
    group: "java"
  },
  {
    id: "myModal4",
    imgSrc: "img/secimodasi.png",
    title: "The Safe Election Room Project",
    description: "The project introduced an innovative voting system utilizing barcodes, sensors, and Arduino to ensure election integrity, which gained media recognition in Fortune 40 magazine as a potential solution for election security challenges. It was honored with the First Place Award at the International ROBORAVE Robotics Competition in May 2019, showcasing its effectiveness and ingenuity in creating a secure and fair voting environment. This accomplishment not only highlights technological innovation but also contributes to the ongoing discussion on improving electoral processes worldwide.",
    modalContent: <div><h1>Election Room Project</h1>{/* Rest of the modal content */}</div>,
    isEven: true,
    group: "robotics"
  },
  {
    id: "myModal5",
    imgSrc: "img/geleceksizin.png",
    title: "The Future is Yours Book Project",
    description: "My sister and I, as juniors in high school, launched a heartfelt initiative: we interviewed inspiring personalities and compiled a book to fund the purchase of medical equipment for a pediatric hospital. Proceeds from our book sales are also set to support educational endeavors, providing tablets and chess sets for middle schoolers, complemented by online chess and coding classes. Our endeavor has been a success, selling 600 copies in just a month, fueled by social media and notable endorsements.",
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
