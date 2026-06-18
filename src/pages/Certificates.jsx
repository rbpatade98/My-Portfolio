import React from "react";
import { Eye } from "lucide-react";


// Import images
// Images are served from the public folder, so we use their direct URLs

const Certificates = () => {
  const certificates = [
    {
      title: "FullStack Python Web Development",
      issuer: "IBM",
      date: "Jan 24, 2024",
      description: "A course on itvedant.skillsnetwork.site Powered by IBM Developer Skills Network.",
      image: "/certificates/cce_certificate.jpg",
      pdf: "/certificates/cce_certificate.jpg",
    },
    {
      title: "SQL certification",
      issuer: "Udemy",
      date: "Oct 26, 2023",
      description: "The Complete Python Pro Bootcamp for 2023 by Dr. Angela Yu",
      image: "/certificates/sql.jpg",
      pdf: "/certificates/sql.jpg",
    },
    {
      title: "Core Web Design",
      issuer: "Google Cloud",
      date: "Dec 15, 2023",
      description: "Completed the Core Web Design course provided by Google Cloud Training.",
      image: "/certificates/corewebdesign.jpg",
      pdf: "/certificates/corewebdesign.jpg",
    },
    {
      title: "Advance Web Design",
      issuer: "OCTANET",
      date: "Nov 2023",
      description: "Successfully completed a one-month internship focusing on modern web development practices.",
      image: "/certificates/advancedwebdesign.jpg",
      pdf: "/certificates/advancedwebdesign.jpg",
    },
  ];

  return (
    <article className="certificates active">
      <header>
        <h2 className="h2 article-title">Certificates</h2>
      </header>

      <div className="certificate-list">
        {certificates.map((cert, index) => (
          <a
            href={cert.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-item"
            key={index}
          >
            <figure className="certificate-img">
              <div className="item-icon-box">
                <Eye size={20} />
              </div>
              <img src={cert.image} alt={cert.title} loading="lazy" />
            </figure>


            <div className="certificate-info">
              <p className="certificate-issuer">
                {cert.issuer} • {cert.date}
              </p>
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-description">{cert.description}</p>
            </div>
          </a>
        ))}
      </div>
    </article>
  );
};

export default Certificates;
