const experienceData = [
  {
    year: "June 2023 - Aug 2023",
    position: "Inter Web Developer - KarakaslarGroup",
    description:
      "Enhanced Karakaslar Group's project management through a custom website created utilizing object-oriented PHP, HTML, CSS, and JavaScript. Streamined tasks across roles (manager, employee, accountant). Improved efficiency and accountability with role-based access, categorized entries, and robust search capabilities.",
  },
  {
    year: "2018 - 2019",
    position: "Web Developer - Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti ex eos commodi quibusdam quos quas optio explicabo dolor repellendus.",
  },
  {
    year: "2019 - 2020",
    position: "Web Developer - Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti ex eos commodi quibusdam quos quas optio explicabo dolor repellendus.",
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
