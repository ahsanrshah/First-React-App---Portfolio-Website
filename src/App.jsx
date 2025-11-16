import "./App.css";
import htmlImg from "./assets/html.png";
import cssImg from "./assets/css.png";
import jsImg from "./assets/js.png";
import reactImg from "./assets/react.png";
import wpImg from "./assets/wp.png";
import psImg from "./assets/ps.png";
import fusionImg from "./assets/fusion.png";
import amigosVid from "./assets/amigos.mp4";

export default function App() {
  return (
    <>
      {/* 🧭 NAVIGATION */}
      <nav className="Nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ✨ INTRO */}
      <section className="intro" id="home">
        <h1>Ahsan Raza</h1>
        <p className="intro-description">
          Hi! I’m a passionate Frontend Developer, WordPress Expert, and UI/UX Designer.
          I love creating interactive, modern websites that deliver amazing user experiences.
        </p>
        <div className="afterintro">
          <h4>Frontend Developer</h4>
          <h4>|</h4>
          <h4>WordPress Expert</h4>
          <h4>|</h4>
          <h4>UI/UX Designer</h4>
        </div>
      </section>

      {/* 🖼️ CAROUSEL */}
      <div className="carousel">
        <div className="carousel-track">
          <img src={htmlImg} alt="html" />
          <img src={cssImg} alt="css" />
          <img src={jsImg} alt="js" />
          <img src={reactImg} alt="react" />
          <img src={wpImg} alt="wp" />
          <img src={psImg} alt="ps" />
          <img src={fusionImg} alt="fusion" />
          <img src={htmlImg} alt="html" />
          <img src={cssImg} alt="css" />
          <img src={jsImg} alt="js" />
          <img src={reactImg} alt="react" />
          <img src={wpImg} alt="wp" />
          <img src={psImg} alt="ps" />
          <img src={fusionImg} alt="fusion" />
        </div>
      </div>

      {/* 🔘 BUTTONS */}
<div className="buttons">
  <a
    className="contactbutton"
    href="mailto:ahsanrazasha@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    Contact Me
  </a>
  
  <a
    className="githubbutton"
    href="https://github.com/ahsanrshah"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>
</div>


      {/* 🛠️ SKILLS */}
      <h1 id="commonheading">Skills</h1>
      <p className="section-description">
        I specialize in a combination of design and development, ensuring your website
        is not only visually appealing but also fully functional.
      </p>

      <div className="skillsgrps" id="skills">
        <div>
          <h2>Frontend</h2>
          <p>HTML, CSS, JavaScript, React</p>
        </div>
        <div>
          <h2>Design</h2>
          <p>Photoshop, Premiere Pro</p>
        </div>
        <div>
          <h2>3D</h2>
          <p>Fusion 360 Modeling</p>
        </div>
      </div>

      {/* 📂 PROJECTS */}
      <h1 id="commonheading">Projects</h1>
      <p className="section-description">
        Here are some of my highlighted projects that showcase my skills in web development,
        design, and interactive media.
      </p>

     <div className="projdisplay" id="projects">

  <div className="projcard">
    <div className="projcard-text">
      <h3>UI Website</h3>
      <p>Dynamic interactive website</p>
    </div>
    <div className="overlay">
      <h3>UI Website</h3>
      <p>A visually engaging, responsive UI website with interactive features and smooth animations.</p>
      <a className="projbtn" href="https://beethebee.netlify.app/honey/" target="_blank" rel="noopener noreferrer">View</a>
    </div>
  </div>

  <div className="projcard">
    <div className="projcard-text">
      <h3>React Business Website</h3>
      <p>Busniess Portfolio Website</p>
    </div>
    <div className="overlay">
      <h3>React Business Website</h3>
      <p>A dynamic website created for a small bussiness startup.</p>
      <a className="projbtn" href="https://mokgrp.com/" target="_blank" rel="noopener noreferrer">View</a>
    </div>
  </div>

  <div className="projcard">
    <div className="projcard-text">
      <h3>WordPress Website</h3>
      <p>Travel Agency Website</p>
    </div>
    <div className="overlay">
      <h3>WordPress Website</h3>
      <p>Fully customized WordPress site for a travel agency, with interactive media galleries and responsive design.</p>
      <a className="projbtn" href="https://gccpk.netlify.app/" target="_blank" rel="noopener noreferrer">View</a>
    </div>
  </div>

</div>


      {/* 🌟 FEATURE PROJECT SHOWCASE */}
      <section className="project-showcase-section">
        <div className="project-showcase">
          {/* Left: Text */}
          <div className="project-text">
            <h2>Amigos Media Agency Website</h2>
            <p>
              A <strong>dynamic, highly interactive media agency website</strong> for Amigos Media. 
              It includes galleries, animations, and responsive design to engage users.
            </p>
            <p>
              The website demonstrates advanced front-end skills, creative layout designs, 
              and interactive user experience.
            </p>
            <p>
              Every detail, from navigation to visuals, is crafted for an immersive experience.
            </p>
          </div>

          {/* Right: Video */}
          <div className="project-video">
            <video autoPlay muted loop>
              <source src={amigosVid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* 💼 SERVICES */}
      <h1 id="commonheading">Services</h1>
      <p className="section-description">
        I provide professional services combining design, development, and user experience
        to deliver websites and media assets that meet modern standards.
      </p>

      <div className="services-grp" id="services">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Creating responsive, modern websites tailored to your needs.</p>
        </div>

        <div className="service-card">
          <h3>WordPress Design</h3>
          <p>Professional WordPress sites with customized themes and plugins.</p>
        </div>

        <div className="service-card">
          <h3>Graphic Design</h3>
          <p>Designing logos, branding, and UI assets that stand out.</p>
        </div>
      </div>

      {/* 📩 CONTACT */}
      <h1 id="commonheading">Contact</h1>
      <p className="section-description">
        Got a project in mind? I’d love to collaborate with you. Reach out and let’s create
        something amazing together!
      </p>
      <form className="contact-form" id="contact">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="6" placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* 🦶 FOOTER */}
      <footer>
        <p>© 2025 Ahsan Raza. All Rights Reserved.</p>
      </footer>
    </>
  );
}
