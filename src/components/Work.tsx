"use client";
import { useEffect, useState } from "react";

type WorkItem = {
  _id: string;
  title: string;
  description: string;
  image: string;
  github: string;
};

const Work = () => {
  const [works, setWorks] = useState<WorkItem[]>([]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const res = await fetch("/api/work");
        const data = await res.json();
        setWorks(data);
      } catch (error) {
        console.error("Failed to fetch work data:", error);
      }
    };

    fetchWorks();
  }, []);

  return (
    <section className="work-section" id="work">
      <h2 className="work-title">My Work</h2>
      <div className="work-grid">
        {works.map((work) => (
          <div key={work._id} className="work-card">
            <div className="work-img-container">
              <img
                src={work.image}
                alt={work.title}
                width={400}
                height={200}
                className="work-img"
                onError={(e) => {
                  e.currentTarget.src = "/error.jpg";
                }}
              />
            </div>
            <h3 className="work-card-title">{work.title}</h3>
            <p className="work-card-description">{work.description}</p>
            <a
              href={work.github}
              target="_blank"
              rel="noopener noreferrer"
              className="work-github-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
