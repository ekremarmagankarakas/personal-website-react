export default function About() {
    return (
        <section className="about" id="about">
            <h2 className="heading">About <span>Me</span></h2>

            <div className="about-img">
            <img src="img/ProfilePicturePNG.png" alt="Ekrem Armagan Karakas" />
                <span className="circle-spin"></span>
            </div>

            <div className="about-content">
                <h3>Frontend Developer!</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium dolorum recusandae saepe magni
                    eveniet provident voluptate cupiditate sapiente vero numquam soluta non amet voluptatem ipsam eius quam
                    molestias pariatur, eaque a! Minus repudiandae sapiente asperiores aliquid magnam iste vel quis officiis
                    odio laudantium numquam minima, dolorem officia esse, quidem ipsa.
                </p>

                <div className="btn-box btns">
                    <a href="#" className="btn">Read More</a>
                </div>
            </div>
        </section>
    );
}