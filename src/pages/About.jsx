import React from "react";
import { Code, Database, Server, Smartphone } from "lucide-react";
import ServiceCard from "../components/common/ServiceCard";

const About = () => {
  const services = [
    {
      title: "Front-End Development",
      description:
        "Creating modern, responsive, and user-friendly web interfaces using HTML, CSS, JavaScript, and React.js",
      icon: <Smartphone size={40} />,
    },
    {
      title: "React Development",
      description:
        "Building dynamic single-page applications with reusable components, state management, and seamless user experiences",
      icon: <Server size={40} />,
    },
    {
      title: "Database Management",
      description:
        "Designing and managing MySQL databases, writing efficient queries, and ensuring data integrity and performance",
      icon: <Database size={40} />,
    },
    {
      title: "Deployment & Hosting",
      description:
        "Deploying and maintaining web applications using Vercel and Render, ensuring reliable performance and accessibility",
      icon: <Code size={40} />,
    },
  ];

  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <section className="about-text">
        <p>
          I have hands-on experience building responsive and user-friendly web applications using HTML, CSS, JavaScript, React.js, MySQL, and modern deployment platforms. I enjoy transforming complex problems into simple, efficient, and scalable solutions while maintaining a strong focus on user experience and performance.
        </p>
        <p>
          My goal is to create visually appealing, functional, and accessible digital products that deliver real value to users. Through academic projects and personal development work, I have strengthened my problem-solving abilities, logical thinking, and technical skills, enabling me to contribute effectively to modern web development projects.
        </p>
        <p>
          I am continuously learning new technologies and best practices, and I am eager to apply my skills to build innovative, impactful, and user-centric applications.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
