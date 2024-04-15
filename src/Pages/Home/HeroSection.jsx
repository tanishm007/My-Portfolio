import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Tanish Mahajan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            
Passionate Full Stack Developer skilled in React and Node.js, dedicated to crafting seamless digital experiences. 
            <br /> Let's turn ideas into reality.
          </p>
        </div>
        <br/>
        <Link to="https://www.linkedin.com/in/tanish-mahajan-437793202/" target="_blank" className="btn btn-primary">Get In Touch</Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero-img2.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
