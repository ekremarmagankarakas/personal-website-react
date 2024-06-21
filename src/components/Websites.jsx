import React from "react";
import WebsiteCard from "./WebsiteCard";
import WebsiteImage1 from "/img/KarakaslarPC.png";
import WebsiteImage2 from "/img/CombinedAIPC.png";
import WebsiteImage3 from "/img/KarakaslarPC.png";

function Websites() {
  const websites = [
    {
      title: "Pesonal Website",
      subtitle: "Responsive Web, UX/UI Design",
      description: "Expressing my own in a creative way",
      image: WebsiteImage1,
    },
    {
      title: "CombinedAI",
      subtitle: "Web Development, Full-Stack",
      description: "Revolutionizing using Large Language Models",
      image: WebsiteImage2,
    },
    {
      title: "KarakaslarGroup Management",
      subtitle: "Web Development, Full-Stack",
      description: "Improving management for construction companies",
      image: WebsiteImage3,
    },
  ];

  return (
    <section className="websites">
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
            />
        ))}
      </div>
    </section>
  );
}

export default Websites;
