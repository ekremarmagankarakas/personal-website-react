import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    const createBubble = () => {
      const heroSection = document.querySelector(".home-bubble");
      const skills = [
        "Python",
        "Java",
        "Racket",
        "C",
        "C++",
        "Go",
        "HTML",
        "CSS",
        "JavaScript",
        "Arduino",
        "Raspberry-Pi",
        "Git",
        "Amazon Workspace",
        "WordPress",
        "Flutter",
        "Eclipse",
        "Jupyter Notebook",
        "RStudio",
        "IntelliJ",
        "Dr. Racket",
        "PyCharm",
        "Android Studio",
        "MariaDB",
        "MySQL",
        "HeidiSQL",
        "VMware",
        "VirtualBox",
        "WordPress",
        "Visual Studio Code",
      ];
      const skill = skills[Math.floor(Math.random() * skills.length)];
      const createElement = document.createElement("span");
      createElement.textContent = skill;
      createElement.classList.add("bubble");

      const size = Math.max(60, skill.length * 10);
      createElement.style.width = `${size}px`;
      createElement.style.height = `${size}px`;
      createElement.style.lineHeight = `${size}px`;

      createElement.style.left = `${
        Math.random() * (heroSection.offsetWidth - size)
      }px`;
      createElement.style.top = `-100px`;

      heroSection.appendChild(createElement);

      setTimeout(() => {
        createElement.remove();
      }, 4000);
    };

    const bubbleInterval = setInterval(createBubble, 1000);

    return () => {
      clearInterval(bubbleInterval);
    };
  }, []);

  return (
    <section className="home show-animate" id="home">
      <div className="home-bubble">
        <div className="home-content">
          <div className="home-text">
            <h3>👋 Hi there, I'm Ekrem Armagan Karakas and I am a</h3>
            <div className="field-of-study">
              <h3>Computer Science</h3>
            </div>
            <h2>Student at Northeastern University</h2>
            <p>
              with a passion for applying technology to solve real-world
              problems. My academic and project work has focused on areas like
              cybersecurity, data science, and software development, and I've
              gained hands-on experience through internships in cloud technology
              and mobile software development. I'm particularly interested in
              leveraging my skills in Python, Java, and Flutter to create
              impactful software solutions. Outside of tech, I enjoy engaging in
              robotics projects, sports, and have a strong commitment to
              community service.
            </p>
            <div className="social-icons">
              <a
                href="https://github.com/ekremarmagankarakas"
                target="_blank"
                rel="noopener noreferrer"
              >
              <span className="fa fa-github"></span>
              </a>
              <a
                href="https://linkedin.com/in/ekrem-armagan-karakas"
                target="_blank"
                rel="noopener noreferrer"
              >
              <span className="fa fa-linkedin"></span>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="img/ProfilePicturePNG.png" alt="Ekrem Armagan Karakas" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
