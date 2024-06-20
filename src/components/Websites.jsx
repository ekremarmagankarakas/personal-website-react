import React from "react";
import WebsiteCard from "./WebsiteCard";
import WebsiteImage1 from "/img/hello.png";
import WebsiteImage2 from "/img/hello.png";
import WebsiteImage3 from "/img/hello.png";

function Websites() {
  const websites = [
    {
      title: "Octopus Energy",
      subtitle: "Responsive Web, UX/UI Design",
      description: "Simplifying the green energy call centre experience",
      image: WebsiteImage1,
    },
    {
      title: "Project 2",
      subtitle: "Web Development, UX/UI Design",
      description: "An innovative web application project",
      image: WebsiteImage2,
    },
    {
      title: "Project 3",
      subtitle: "E-commerce, UX/UI Design",
      description: "Revolutionizing the online shopping experience",
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
