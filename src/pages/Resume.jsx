import React from "react";
import { BookOpen, Briefcase, Code } from "lucide-react";

const Resume = () => {
  const education = [
    {
      title:
        "Thakur Institute of Management Studies, Career Development & Research, Mumbai",
      date: "2019 — 2022",
      description:
        "Completed MCA (Master of Computer Applications) with a focus on software development and web technologies. Gained hands-on experience in building dynamic web applications and strengthened problem-solving skills.",
    },
    {
      title: "Kirti M. Doongursee College of Arts, Science and Commerce",
      date: "2016 — 2019",
      description:
        "Completed Bachelor's degree with a focus on science subjects, building a strong foundation in analytical thinking, logic, and problem-solving.",
    },
    {
      title: "Swami Vivekanand International School & Jr College",
      date: "2014 — 2016",
      description:
        "Completed Higher Secondary education with a science stream, developing core knowledge in mathematics and science along with disciplined study habits.",
    },
    {
      title: "Shree Ekveera Vidyalaya / Mother Teresa English High School",
      date: "— 2014",
      description:
        "Completed Secondary education, focusing on fundamental academic skills, communication, and overall personality development.",
    },
  ];

  const experience = [
    {
      title: "TechStalwarts Software Development LLP | Software Developer",
      date: "January 2026 — Present",
      description: `• Developed responsive web applications using React.js, HTML5, CSS3, JavaScript (ES6), and MUI.
      • Integrated REST APIs using RTK Query for efficient data fetching, caching, and state synchronization.
      • Improved frontend performance by 30% through memoization, code splitting, and lazy loading.
      • Implemented JWT authentication, protected routes, and secure API handling.
      • Collaborated using Git and GitHub for version control and teamwork.
      • Deployed applications using Vercel and Render.
      • Built reusable and modular React components to improve code maintainability and scalability.
      • Designed responsive and mobile-friendly UI, ensuring a seamless user experience across devices.`,
    },
    {
      title: "STEP One Step Ahead | Robotic Process Automation Developer",
      date: "Aug 2025 — Dec 2025",
      description: `• Developed automation solutions using UiPath for Web, Excel, Email, and PDF processes.
      • Built projects like Web Scraping, RPA Challenge Form Filling, and Flight Travel Buddy.
      • Created BOT DNA use cases such as Locator, Active Loans, Notary Service, and School Info systems
      `,
    },
    {
      title:
        "VIBGYOR ADVICORP PRIVATE LIMITED. | Fullstack Web Developer Intern",
      date: "April 2025 — July 2025",
      description:
        `• Contributed to a Django-based HRMS with modules like Department, Role, Employee, Task, and Leave.
        • Built responsive UIs using HTML, CSS, JavaScript, and Bootstrap.
        • Developed backend features with Python, Django ORM, and maintained database relationships.
        • Used Git/GitHub for version control and collaborative development.`,
    },
  ];

  return (
    <article className="resume active">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen size={22} />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="timeline-item-title">{item.title}</h4>
              <span>{item.date}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Briefcase size={22} />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experience.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="timeline-item-title">{item.title}</h4>
              <span>{item.date}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Code size={22} />
          </div>
          <h3 className="h3">Technical Expertise</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-item-title">Programming Languages</h4>
            <p className="timeline-text">HTML5, CSS3, JavaScript (ES6), React, SQL, Python, JSON</p>
          </li>
          <li className="timeline-item">
            <h4 className="timeline-item-title">UI & Design Systems</h4>
            <p className="timeline-text">Tailwind CSS, Material UI (MUI), Bootstrap</p>
          </li>
          <li className="timeline-item">
            <h4 className="timeline-item-title">Databases</h4>
            <p className="timeline-text">MySQL, SQLite</p>
          </li>
          <li className="timeline-item">
            <h4 className="timeline-item-title">Tools & Technologies</h4>
            <p className="timeline-text">Git, GitHub, VS Code, Postman, REST APIs, Uipath</p>
          </li>
          <li className="timeline-item">
            <h4 className="timeline-item-title">Others</h4>
            <p className="timeline-text">Responsive Web Design, API Integration, MVT Architecture, Django ORM, Git Workflows</p>
          </li>
        </ol>
      </section>
    </article>

  );
};

export default Resume;
