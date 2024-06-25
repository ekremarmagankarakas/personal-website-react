import React, { useEffect, useState } from "react";
import Project from "./Project.jsx";

function Projects() {
  const [visibleGroup, setVisibleGroup] = useState(null);

  const toggleGroupVisibility = (group) => {
    setVisibleGroup(visibleGroup === group ? null : group);
  };

  useEffect(() => {}, [visibleGroup]);

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
        <div className={`project-group all ${visibleGroup === "all" ? "open" : ""}`}>
          {visibleGroup === "all" && (
            <>
              <div className="project-group python open">
                <Project
                  id="myModal1"
                  imgSrc="img/soccer.jpg"
                  title="UK Soccer Player Valuation Analysis"
                  description="The project involved creating a statistical model to estimate UK soccer players' transfer values, offering an impartial assessment tool for the transfer market. It analyzed players' performance metrics and other factors to identify cost-effective and strategic profiles for soccer team management. The primary aim was to link players' on-pitch performance with their market value, enhancing resource allocation decisions in club management. CLICK TO READ MORE"
                  modalContent={
                    <div>
                      <h1>UK Soccer Player Valuation Analysis</h1> 
                      {/* Rest of the modal content */}
                    </div>
                  }
                  isEven={false}
                />
                <Project
                  id="myModal6"
                  imgSrc="img/diabetes.png"
                  title="Diabetes Prediction Model"
                  description="This project involves analyzing a diabetes dataset to predict the presence of diabetes in patients using various statistical and machine learning techniques. The dataset contains information on pregnancies, glucose levels, blood pressure, skin thickness, insulin levels, BMI, diabetes pedigree function, age, and the outcome (presence or absence of diabetes). Despite achieving a reasonable level of accuracy, the model's limitations underscore the need for more sophisticated techniques or additional data to improve performance in a real-world medical setting. CLICK TO READ MORE"
                  modalContent={
                    <div>
                      <h1>Diabetes Prediction Model</h1> 
                      {/* Rest of the modal content */}
                    </div>
                  }
                  isEven={true}
                />
                <Project
                  id="myModal7"
                  imgSrc="img/taxiTip.png"
                  title="Green Taxi Trip Analysis with Random Forest Model"
                  description="This project involves analyzing a dataset of green taxi trips in New York City, focusing on predicting the tip amount using a variety of features such as vendor ID, pickup and drop-off locations, trip distance, fare amount, and other related attributes. The dataset is sourced from the NYC Taxi & Limousine Commission and is provided in a Parquet format. The Random Forest model shows moderate success, with potential for further improvement through additional tuning or feature engineering.  CLICK TO READ MORE"
                  modalContent={
                    <div>
                      <h1>Green Taxi Trip Analysis with Random Forest Model</h1> 
                      {/* Rest of the modal content */}
                    </div>
                  }
                  isEven={false}
                />
              </div>
              <div className="project-group java open">
                <Project
                  id="myModal2"
                  imgSrc="img/reversi.png"
                  title="Reversi Game Development"
                  description="The project involved developing a Reversi game using Java, featuring a hexagonal grid, adaptable to various sizes and adhering to the standard rules for two players. It was built on a model-view-controller architecture, with the model handling the game's state, rules, and interactions, while the view provided textual output, designed with potential for future graphical upgrades. This endeavor showcases advanced Java application in algorithm creation, game development, AI strategies, and comprehensive unit testing. CLICK TO READ MORE"
                  modalContent={
                    <div>
                      <h1>Reversi Game</h1>
                      {/* Rest of the modal content */}
                    </div>
                  }
                  isEven={true}
                />
                <Project
                  id="myModal3"
                  imgSrc="img/karakaslargroup.png"
                  title="Karakaslar Group Application"
                  description="The founder of 'Karakaşlar Group' requested an application to streamline the approval of worker requests, leading to the creation of a system with three types of accounts: manager, employee, and accountant. Employees can submit entries for necessary items, which managers can approve or decline, while accountants monitor all entries without approval rights. The application features secure login, personalized entry visibility, categorization, and historical data analysis. CLICK TO READ MORE"
                  modalContent={
                    <div>
                      <h1>Karakaslar Group App</h1>
                      {/* Rest of the modal content */}
                    </div>
                  }
                  isEven={false}
                />
                <Project
                  id="myModal8"
                  imgSrc="img/Klondike.png"
                  title="Klondike Solitaire Game Implementation"
                  description="This project involves creating a console-based version of the popular Klondike solitaire game, allowing users to play different variants of the game. The main components of the project include a controller for managing user input and game flow, models representing the game logic and states, and a flexible setup for launching the game with various configurations. By leveraging OOP, the Factory pattern, MVC architecture, and robust exception handling, the project ensures a maintainable and scalable codebase. CLICK TO READ MORE"
                  modalContent={
                    <div>
                      <h1>Klondike Solitaire Game Implementation</h1>
                      {/* Rest of the modal content */}
                    </div>
                  }
                  isEven={false}
                />
              </div>
              <div className="project-group robotics open">
                <Project
                  id="myModal4"
                  imgSrc="img/secimodasi.png"
                  title="The Safe Election Room Project"
                  description="The project introduced an innovative voting system utilizing barcodes, sensors, and Arduino to ensure election integrity, which gained media recognition in Fortune 40 magazine as a potential solution for election security challenges. It was honored with the First Place Award at the International ROBORAVE Robotics Competition in May 2019, showcasing its effectiveness and ingenuity in creating a secure and fair voting environment. This accomplishment not only highlights technological innovation but also contributes to the ongoing discussion on improving electoral processes worldwide. CLICK TO READ MORE"
                  modalContent={
                    <div>
                      <h1>Election Room Project</h1>
                      {/* Rest of the modal content */}
                    </div>
                  }
                  isEven={true}
                />
              </div>
              <div className="project-group other open">
                <Project
                  id="myModal5"
                  imgSrc="img/geleceksizin.png"
                  title="The Future is Yours Book Project"
                  description="My sister and I, as juniors in high school, launched a heartfelt initiative: we interviewed inspiring personalities and compiled a book to fund the purchase of medical equipment for a pediatric hospital. Proceeds from our book sales are also set to support educational endeavors, providing tablets and chess sets for middle schoolers, complemented by online chess and coding classes. Our endeavor has been a success, selling 600 copies in just a month, fueled by social media and notable endorsements. CLICK TO READ MORE"
                  modalContent={
                    <div>
                      <h1>The Future is Yours</h1>
                      {/* Rest of the modal content */}
                    </div>
                  }
                  isEven={false}
                />
              </div>
            </>
          )}
        </div>
        <div className={`project-group python ${visibleGroup === "python" ? "open" : ""}`}>
          {visibleGroup === "python" && (
            <div>
              <Project
                id="myModal1"
                imgSrc="img/soccer.jpg"
                title="UK Soccer Player Valuation Analysis"
                description="The project involved creating a statistical model to estimate UK soccer players' transfer values, offering an impartial assessment tool for the transfer market. It analyzed players' performance metrics and other factors to identify cost-effective and strategic profiles for soccer team management. The primary aim was to link players' on-pitch performance with their market value, enhancing resource allocation decisions in club management. CLICK TO READ MORE"
                modalContent={
                  <div>
                    <h1>UK Soccer Player Valuation Analysis</h1> 
                    {/* Rest of the modal content */}
                  </div>
                }
                isEven={false}
              />
              <Project
                id="myModal6"
                imgSrc="img/diabetes.png"
                title="Diabetes Prediction Model"
                description="This project involves analyzing a diabetes dataset to predict the presence of diabetes in patients using various statistical and machine learning techniques. The dataset contains information on pregnancies, glucose levels, blood pressure, skin thickness, insulin levels, BMI, diabetes pedigree function, age, and the outcome (presence or absence of diabetes). Despite achieving a reasonable level of accuracy, the model's limitations underscore the need for more sophisticated techniques or additional data to improve performance in a real-world medical setting. CLICK TO READ MORE"
                modalContent={
                  <div>
                    <h1>Diabetes Prediction Model</h1> 
                    {/* Rest of the modal content */}
                  </div>
                }
                isEven={true}
              />
              <Project
                id="myModal7"
                imgSrc="img/taxiTip.png"
                title="Green Taxi Trip Analysis with Random Forest Model"
                description="This project involves analyzing a dataset of green taxi trips in New York City, focusing on predicting the tip amount using a variety of features such as vendor ID, pickup and drop-off locations, trip distance, fare amount, and other related attributes. The dataset is sourced from the NYC Taxi & Limousine Commission and is provided in a Parquet format. The Random Forest model shows moderate success, with potential for further improvement through additional tuning or feature engineering.  CLICK TO READ MORE"
                modalContent={
                  <div>
                    <h1>Green Taxi Trip Analysis with Random Forest Model</h1> 
                    {/* Rest of the modal content */}
                  </div>
                }
                isEven={false}
              />
            </div>
          )}
        </div>
        <div className={`project-group java ${visibleGroup === "java" ? "open" : ""}`}>
          {visibleGroup === "java" && (
            <div>
              <Project
                id="myModal2"
                imgSrc="img/reversi.png"
                title="Reversi Game Development"
                description="The project involved developing a Reversi game using Java, featuring a hexagonal grid, adaptable to various sizes and adhering to the standard rules for two players. It was built on a model-view-controller architecture, with the model handling the game's state, rules, and interactions, while the view provided textual output, designed with potential for future graphical upgrades. This endeavor showcases advanced Java application in algorithm creation, game development, AI strategies, and comprehensive unit testing. CLICK TO READ MORE"
                modalContent={
                  <div>
                    <h1>Reversi Game</h1>
                    {/* Rest of the modal content */}
                  </div>
                }
                isEven={false}
              />
              <Project
                id="myModal3"
                imgSrc="img/karakaslargroup.png"
                title="Karakaslar Group Application"
                description="The founder of 'Karakaşlar Group' requested an application to streamline the approval of worker requests, leading to the creation of a system with three types of accounts: manager, employee, and accountant. Employees can submit entries for necessary items, which managers can approve or decline, while accountants monitor all entries without approval rights. The application features secure login, personalized entry visibility, categorization, and historical data analysis. CLICK TO READ MORE"
                modalContent={
                  <div>
                    <h1>Karakaslar Group App</h1>
                    {/* Rest of the modal content */}
                  </div>
                }
                isEven={true}
              />
              <Project
                  id="myModal8"
                  imgSrc="img/Klondike.png"
                  title="Klondike Solitaire Game Implementation"
                  description="This project involves creating a console-based version of the popular Klondike solitaire game, allowing users to play different variants of the game. The main components of the project include a controller for managing user input and game flow, models representing the game logic and states, and a flexible setup for launching the game with various configurations. By leveraging OOP, the Factory pattern, MVC architecture, and robust exception handling, the project ensures a maintainable and scalable codebase. CLICK TO READ MORE"
                  modalContent={
                    <div>
                      <h1>Klondike Solitaire Game Implementation</h1>
                      {/* Rest of the modal content */}
                    </div>
                  }
                  isEven={false}
                />
            </div>
          )}
        </div>
        <div className={`project-group robotics ${visibleGroup === "robotics" ? "open" : ""}`}>
          {visibleGroup === "robotics" && (
            <div>
              <Project
                id="myModal4"
                imgSrc="img/secimodasi.png"
                title="The Safe Election Room Project"
                description="The project introduced an innovative voting system utilizing barcodes, sensors, and Arduino to ensure election integrity, which gained media recognition in Fortune 40 magazine as a potential solution for election security challenges. It was honored with the First Place Award at the International ROBORAVE Robotics Competition in May 2019, showcasing its effectiveness and ingenuity in creating a secure and fair voting environment. This accomplishment not only highlights technological innovation but also contributes to the ongoing discussion on improving electoral processes worldwide. CLICK TO READ MORE"
                modalContent={
                  <div>
                    <h1>Election Room Project</h1>
                    {/* Rest of the modal content */}
                  </div>
                }
                isEven={false}
              />
            </div>
          )}
        </div>
        <div className={`project-group other ${visibleGroup === "other" ? "open" : ""}`}>
          {visibleGroup === "other" && (
            <div>
              <Project
                id="myModal5"
                imgSrc="img/geleceksizin.png"
                title="The Future is Yours Book Project"
                description="My sister and I, as juniors in high school, launched a heartfelt initiative: we interviewed inspiring personalities and compiled a book to fund the purchase of medical equipment for a pediatric hospital. Proceeds from our book sales are also set to support educational endeavors, providing tablets and chess sets for middle schoolers, complemented by online chess and coding classes. Our endeavor has been a success, selling 600 copies in just a month, fueled by social media and notable endorsements. CLICK TO READ MORE"
                modalContent={
                  <div>
                    <h1>The Future is Yours</h1>
                    {/* Rest of the modal content */}
                  </div>
                }
                isEven={false}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
