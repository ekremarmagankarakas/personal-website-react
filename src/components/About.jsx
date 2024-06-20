export default function About() {
    return (
        <section className="about" id="about">
            <h2 className="heading">About <span>Me</span></h2>

            <div className="about-img">
            <img src="img/ProfilePicturePNG.png" alt="Ekrem Armagan Karakas" />
                <span className="circle-spin"></span>
            </div>

            <div className="about-content">
                <h3>Computer Science</h3>
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
        </section>
    );
}