const experienceData = [
  {
    year: "July – Dec. 2024",
    position: "IT Desk Co-op - Unifirst",
    description:
      "Provided technical support and troubleshooting assistance to customers, resolving hardware, software, and network issues to ensure seamless business operations.",
  },
  {
    year: "Sept - Dec 2023",
    position: "Athletic Chair - Delta Kappa Epsilon Northeastern",
    description:
      "Led sports and fitness initiatives, fostering teamwork and healthy lifestyles among fraternity members. Organized and managed inter-fraternity athletic competitions, enhancing community engagement and promoting physical well-being. ",
  },
  {
    year: "June 2023 - Aug 2023",
    position: "Inter Web Developer - KarakaslarGroup",
    description:
      "Enhanced Karakaslar Group's project management through a custom website created utilizing object-oriented PHP, HTML, CSS, and JavaScript. Streamined tasks across roles (manager, employee, accountant). Improved efficiency and accountability with role-based access, categorized entries, and robust search capabilities.",
  },
  {
    year: "Aug 2020",
    position: "Intern - Cloudyflex",
    description:
      "Interned at a cloud technology company, learned ZOHO software for varied business processes. Contributed to the Message Management System (MMS) by assisting with data management tasks.",
  },
  {
    year: "July 2020",
    position: "Intern - MobileX",
    description:
      "Trained in mobile applications for iOS and Android, gained back-end system experience. Participated in the Aura Dashboard project, observing database queries and analytics presentation on an interactive dashboard.",
  },
];

const EducationContent = ({ year, title, description }) => (
  <div className="education-content">
    <div className="content">
      <div className="year">
        <i className="bx bxs-calendar"></i> {year}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section className="education" id="education">
      <h2 className="heading">
        My <span>Experiences</span>
      </h2>
      <div className="education-row">
        <div className="education-column">
          <div className="education-box">
            {experienceData.map((exp, index) => (
              <EducationContent
                key={index}
                year={exp.year}
                title={exp.position}
                description={exp.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
