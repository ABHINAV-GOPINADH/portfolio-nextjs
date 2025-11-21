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
    <section className="work-section mt-16" id="work">
      <h2 className="text-3xl font-bold text-center mb-6">My Work</h2>
      <div className="flex overflow-x-auto space-x-6 px-4 py-2 scrollbar-hide">
        {works.map((work) => (
          <div key={work._id} className="flex-shrink-0 w-[300px] h-[400px] bg-[#1f2937] text-white rounded-xl shadow-lg p-4 flex flex-col justify-between">
            <div className="w-full h-[180px] overflow-hidden rounded-md mb-2">
              <img
                src={work.image}
                alt={work.title}
                width={400}
                height={200}
                className="w-full h-full object-cover rounded"
                onError={(e) => {
                  e.currentTarget.src = "/error.jpg";
                }}
              />
            </div>
            <h3 className="text-lg font-semibold truncate">{work.title}</h3>
            <p className="text-sm text-gray-300 overflow-hidden text-ellipsis line-clamp-3">{work.description}</p>
            <a
              href={work.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded"
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
