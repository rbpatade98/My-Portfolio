import React, { useState } from "react";
import { Eye } from "lucide-react";

// Import images
import healthcareImg from "../assets/healthcare.png";
import ecommerceImg from "../assets/ecommerce.png";
import fundoImg from "../assets/fundo.png";
import brawlhallaImg from "../assets/brawlhalla.png";
import dsmImg from "../assets/dsm.png";
import metasparkImg from "../assets/metaspark.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web development", "Web design", "Applications"];

  const projects = [
    {
      title: "Health Care",
      category: "Web development",
      image: healthcareImg,
    },
    {
      title: "E-Commerce Website",
      category: "Web development",
      image: ecommerceImg,
    },
    {
      title: "Fundo",
      category: "Web design",
      image: fundoImg,
    },
    {
      title: "Brawlhalla",
      category: "Applications",
      image: brawlhallaImg,
    },
    {
      title: "DSM.",
      category: "Web design",
      image: dsmImg,
    },
    {
      title: "MetaSpark",
      category: "Web design",
      image: metasparkImg,
    },
  ];

  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.category === activeFilter
  );

  return (
    <article className="projects active">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects-content">
        <ul className="filter-list">
          {categories.map((category) => (
            <li className="filter-item" key={category}>
              <button
                className={activeFilter === category ? "active" : ""}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="project-list">
          {filteredProjects.map((project, index) => (
            <div className="project-item" key={index}>
              <figure className="project-img">
                <div className="item-icon-box">
                  <Eye size={20} />
                </div>
                <img src={project.image} alt={project.title} loading="lazy" />
              </figure>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Projects;
