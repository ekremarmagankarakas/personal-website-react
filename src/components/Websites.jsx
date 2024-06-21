import React, { useEffect } from "react";
import WebsiteCard from "./WebsiteCard";
import WebsiteImage1 from "/img/PortfolioPC.png";
import WebsiteImage2 from "/img/CombinedAIPC.png";
import WebsiteImage3 from "/img/KarakaslarPC.png";

function Websites() {
  const websites = [
    {
      title: "Pesonal Website",
      subtitle: "Responsive Web, UX/UI Design",
      description: "Expressing my own in a creative way",
      image: WebsiteImage1,
      backgroundColor: "#ff6f61",
      url: "https://eakarakas.com",
    },
    {
      title: "CombinedAI",
      subtitle: "Web Development, Full-Stack",
      description: "Revolutionizing using Large Language Models",
      image: WebsiteImage2,
      backgroundColor: "#3535",
      url: "https://combinedai.onrender.com",
    },
    {
      title: "KarakaslarGroup Management",
      subtitle: "Web Development, Full-Stack",
      description: "Improving management for construction companies",
      image: WebsiteImage3,
      backgroundColor: "#88b04b",
      url: "https://karakaslargroupyonetim.000webhostapp.com",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    }, observerOptions);

    const projects = document.querySelectorAll(".website-card");

    projects.forEach((project) => {
      observer.observe(project);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="websites" id="websites">
      <h2 className="heading">
        My <span>Websites</span>
      </h2>
      <div className="websites-container">
        {websites.map((website, index) => (
            <WebsiteCard
            key={index}
            title={website.title}
            subtitle={website.subtitle}
            description={website.description}
            image={website.image}
            backgroundColor={website.backgroundColor}
            onClick={() => window.open(website.url, '_blank')}
            />
        ))}
      </div>
    </section>
  );
}

export default Websites;
