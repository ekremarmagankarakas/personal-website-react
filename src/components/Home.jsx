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

    const wave1 = document.getElementById('wave1');
    const wave2 = document.getElementById('wave2');
    const wave3 = document.getElementById('wave3');
    const wave4 = document.getElementById('wave4');

    const handleScroll = () => {
      let value = window.scrollY;

      wave1.style.backgroundPositionX = 400 + value * 2 + "px";
      wave2.style.backgroundPositionX = 300 + value * -2 + "px";
      wave3.style.backgroundPositionX = 200 + value * 1 + "px";
      wave4.style.backgroundPositionX = 100 + value * -1 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(bubbleInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="home show-animate" id="home">
      <div className="home-bubble">
        <div className="home-content">
          <h1>Ekrem Armagan Karakas</h1>
        </div>
      </div>
      <div className="wave-container">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
    </div>
    </section>
  );
}

export default Home;
