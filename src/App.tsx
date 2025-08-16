import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import "./styles/background.css";
import TypeWriter from "./components/TypeWriter";
import ThreeLaptop from "./components/ThreeLaptop";

function App() {
  return (
    <div className="min-h-screen cyber-bg">
      <div className="robot-silhouette" />
      {/* Navigation */}
      <nav className="fixed w-full bg-primary/80 backdrop-blur-md z-50 border-b border-secondary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold neon-text font-mono"
            ></motion.div>
            <div className="flex flex-wrap justify-center space-x-8">
              {[
                "home",
                "about",
                "skills",
                "education",
                "projects",
                "contact",
              ].map((item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link font-mono text-sm md:text-base"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="section-padding min-h-screen flex items-center justify-center"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-7xl mx-auto w-full px-8">
          {/* الجزء التعريفي */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto md:mx-0"
            >
              <h1 className="heading font-mono mb-4">
                <TypeWriter
                  text="Hi, I'm "
                  className="text-light"
                  delay={100}
                />
                <TypeWriter
                  text="Mohammed Younis"
                  className="neon-text"
                  delay={100}
                />
              </h1>
              <p className="subheading font-mono mb-4">
                Full Stack Developer | Backend Developer
              </p>
              <p className="text-tertiary mb-8 font-mono">
                I build exceptional digital experiences that make an impact.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://github.com/DevMo7md" className="social-icon">
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-tamer-younis-4a05702b0/"
                  className="social-icon"
                >
                  <FaLinkedin size={24} />
                </a>
                <a href="https://x.com/Eng____M7md" className="social-icon">
                  <FaTwitter size={24} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* الجزء 3D */}
          <div
            className="w-full md:flex-[1.5] md:max-w-2xl"
            style={{ height: 500 }}
          >
            <ThreeLaptop />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-primary/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading neon-text">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Info */}
              <div className="bg-primary/50 p-6 rounded-lg border border-secondary/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-secondary font-mono">Name:</span>
                    <span className="text-light">Mohammed Tamer Younis</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-secondary font-mono">Age:</span>
                    <span className="text-light">19</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-secondary font-mono">Location:</span>
                    <span className="text-light">Mansoura,Egypt</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-secondary font-mono">Email:</span>
                    <a
                      href="mailto:dev.mohammed.younis@gmail.com"
                      className="text-light hover:text-secondary transition-colors"
                    >
                      dev.mohammed.younis@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-secondary font-mono">Phone:</span>
                    <a
                      href="tel:+201080407626"
                      className="text-light hover:text-secondary transition-colors"
                    >
                      +20 108 040 7626
                    </a>
                  </div>
                  <div className="pt-4">
                    <a
                      href="/Portfolio/cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-button inline-block px-6 py-2"
                    >
                      View CV
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="bg-primary/50 p-6 rounded-lg border border-secondary/20">
                <h3 className="text-xl font-mono text-secondary mb-4">Bio</h3>
                <p className="text-tertiary">
                  Hi everyone! <br />
                  My name is Mohammed Younis, a passionate Django developer
                  dedicated to building high-quality and scalable web
                  applications. I am constantly enhancing my technical skills
                  and staying up to date with the latest technologies to deliver
                  clean, efficient, and maintainable code. I'm excited to grow
                  within the tech industry and contribute to impactful projects
                  that make a real difference. If you're looking for a
                  committed, reliable, and results-driven developer, feel free
                  to reach out. I'm always open to new opportunities and
                  challenges.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading neon-text">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Technical Skills */}
              <div className="bg-primary/50 p-6 rounded-lg border border-secondary/20">
                <h3 className="text-xl font-mono text-secondary mb-4">
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-light font-mono mb-2">
                      Backend Development
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Python",
                        "Django",
                        "Django REST",
                        "PostgreSQL",
                        "MySQL",
                        "SQLite",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary/10 text-secondary rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-light font-mono mb-2">
                      Frontend Development
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "Bootstrap",
                        "Tailwind CSS",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary/10 text-secondary rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-light font-mono mb-2">Tools & Others</p>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "Docker", "Linux", "REST APIs"].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary/10 text-secondary rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-primary/50 p-6 rounded-lg border border-secondary/20">
                <h3 className="text-xl font-mono text-secondary mb-4">
                  Soft Skills
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-light font-mono mb-2">
                      Professional Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Problem Solving",
                        "Team Collaboration",
                        "Communication",
                        "Time Management",
                        "Adaptability",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary/10 text-secondary rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-light font-mono mb-2">Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {["English", "Arabic"].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary/10 text-secondary rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-primary/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading neon-text">Education</h2>
            <div className="space-y-8">
              <div className="bg-primary/50 p-6 rounded-lg border border-secondary/20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-xl font-mono text-secondary">
                    High school degree
                  </h3>
                  <span className="text-tertiary font-mono text-sm">
                    2022 - 2025
                  </span>
                </div>
                <p className="text-light font-mono mb-2"> Naser High School</p>
                <p className="text-tertiary"></p>
              </div>

              <div className="bg-primary/50 p-6 rounded-lg border border-secondary/20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-xl font-mono text-secondary">
                    Certifications
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-light font-mono mb-2">
                      Django Development
                    </p>
                    <p className="text-tertiary">
                      Comprehensive course covering Django framework, REST APIs,
                      and best practices
                    </p>
                  </div>
                  <div>
                    <p className="text-light font-mono mb-2">Web Development</p>
                    <p className="text-tertiary">
                      Full-stack web development certification covering modern
                      web technologies with{" "}
                      <a style={{ color: "cyan" }} href="https://satr.codes/">
                        satr academy
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading neon-text">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-primary/50 rounded-lg overflow-hidden border border-secondary/20 group hover:border-secondary/40 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/Portfolio/img/younis_store.png"
                    alt="Project 1"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-mono text-secondary mb-2">
                    Younis Store(Car Spare Parts System)
                  </h3>
                  <p className="text-tertiary mb-4">
                    This is a Car Spare Parts System . The Car Spare Parts
                    Management System is a simple project aimed at facilitating
                    the management of spare parts in a workshop or car store.
                    The system allows users to add new spare parts, edit them,
                    delete them, and display them in an organized , integrated with AI (Gemini 2.0 flash) to create bills from photos and PDFs and
                    user-friendly manner.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["HTML", "CSS", "JS", "Django", "PostgreSQL", "Gemini 2.0 flash"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary/10 text-secondary rounded text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href="https://github.com/DevMo7md/Car-Spare-Parts-System"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-button px-4 py-2 text-sm"
                    >
                      View Project
                    </a>
                    <a
                      href="https://github.com/DevMo7md/Car-Spare-Parts-System"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-light transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Project Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-primary/50 rounded-lg overflow-hidden border border-secondary/20 group hover:border-secondary/40 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/Portfolio/img/msclinic.png"
                    alt="Project 2"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-mono text-secondary mb-2">
                    MS-Clinic(Clinic Site With Appointment System)
                  </h3>
                  <p className="text-tertiary mb-4">
                    This is a Clinic Site With Appointment System. The Clinic
                    Site With Appointment System is a simple project aimed at
                    facilitating the management of appointments in a clinic. The
                    system allows users to add new appointments, edit them,
                    delete them, and display them in an organized and
                    user-friendly manner.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["HTML", "CSS", "JS", "Python", "Django", "MySQL"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary/10 text-secondary rounded text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href="https://msclinic.pythonanywhere.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-button px-4 py-2 text-sm"
                    >
                      View Project
                    </a>
                    <a
                      href="https://github.com/DevMo7md/MS-clinic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-light transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Project Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-primary/50 rounded-lg overflow-hidden border border-secondary/20 group hover:border-secondary/40 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/Portfolio/img/Zaied.png"
                    alt="Project 3"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-mono text-secondary mb-2">
                    Zaied Academy(Online Courses Platform)
                  </h3>
                  <p className="text-tertiary mb-4">
                    Zayed Academy is a comprehensive online platform that offers
                    a full suite of educational services, including courses,
                    integrated testing and examination systems, assignment
                    submission, and seamless payment solutions powered by Paymob
                    integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      "Python",
                      "Django",
                      "HTML",
                      "CSS",
                      "JS",
                      "PostgreSQL",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/10 text-secondary rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href="https://github.com/DevMo7md/Zaied-Academy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-button px-4 py-2 text-sm"
                    >
                      View Project
                    </a>
                    <a
                      href="https://github.com/DevMo7md/Zaied-Academy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-light transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Project Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-primary/50 rounded-lg overflow-hidden border border-secondary/20 group hover:border-secondary/40 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/Portfolio/img/Api_photo.png"
                    alt="Project 3"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-mono text-secondary mb-2">
                    Tender(E-commerce)
                  </h3>
                  <p className="text-tertiary mb-4">
                    E-Commerce API built with Python & Django, featuring product
                    management, user authentication, shopping cart & checkout,
                    media handling, payment integration, delivery support, and
                    secure REST API endpoints.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      "Python",
                      "Django",
                      "Django REST",
                      "REST API",
                      "HTML",
                      "CSS",
                      "PostgreSQL",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/10 text-secondary rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href="https://github.com/DevMo7md/E-Commerce-API.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-button px-4 py-2 text-sm"
                    >
                      View Project
                    </a>
                    <a
                      href="https://github.com/DevMo7md/E-Commerce-API.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-light transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer/Contact Section */}
      <footer className="bg-primary/90 border-t border-secondary/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-center"
            >
              <h2 className="heading neon-text">Get In Touch</h2>
              <p className="text-tertiary">
                I'm currently open to new opportunities. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you!
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:dev.mohammed.younis@gmail.com"
                  className="flex items-center justify-center space-x-3 text-light hover:text-secondary transition-colors"
                >
                  <span className="text-secondary">Email:</span>
                  <span>dev.mohammed.younis@gmail.com</span>
                </a>
                <a
                  href="tel:+201080407626"
                  className="flex items-center justify-center space-x-3 text-light hover:text-secondary transition-colors"
                >
                  <span className="text-secondary">Phone:</span>
                  <span>+20 108 040 7626</span>
                </a>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-secondary">Location:</span>
                  <span className="text-light">Mansoura,Egypt</span>
                </div>
              </div>
              <div className="flex justify-center space-x-4 pt-4">
                <a href="https://github.com/DevMo7md" className="social-icon">
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-tamer-younis-4a05702b0/"
                  className="social-icon"
                >
                  <FaLinkedin size={24} />
                </a>
                <a href="https://x.com/Eng____M7md" className="social-icon">
                  <FaTwitter size={24} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-secondary/20 text-center">
            <p className="text-tertiary">
              © {new Date().getFullYear()} Mohammed Younis. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
